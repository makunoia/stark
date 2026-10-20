"use client";

import React, { useEffect, useId, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { flexRender, functionalUpdate, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnDef, type TableState, type OnChangeFn } from "@tanstack/react-table";
import * as Popover from "@radix-ui/react-popover";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Search, Settings2, X } from "lucide-react";
import Button from "../components/Button.js";
import IconButton from "../components/IconButton.js";
import TextButton from "../components/TextButton.js";
import Dropdown from "../components/Dropdown.js";
import Checkbox from "../components/Checkbox.js";
import Input from "../components/Input.js";
import { cn } from "../lib/utils.js";

export type DataTableColumnDef<T> = ColumnDef<T, unknown>;
export type DataTableState = Partial<TableState>;
export interface DataTableFilter { columnId: string; label: string; options: { label: string; value: string }[]; multiple?: boolean; placeholder?: string }
export interface DataTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  data: T[];
  columns: DataTableColumnDef<T>[];
  getRowId: (row: T) => string;
  caption?: string;
  searchLabel?: string;
  searchPredicate?: (row: T, query: string) => boolean;
  filters?: DataTableFilter[];
  searchable?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableSelection?: boolean;
  enableColumnResizing?: boolean;
  enableColumnVisibility?: boolean;
  initialState?: DataTableState;
  state?: DataTableState;
  onStateChange?: (state: TableState) => void;
  bulkActions?: (selectedRows: T[], clearSelection: () => void) => ReactNode;
  loading?: boolean;
  error?: ReactNode;
  onRetry?: () => void;
  emptyContent?: ReactNode;
  noResultsContent?: ReactNode;
}

function ColumnWidthInput({ label, size, min = 96, max = 640, onCommit }: { label: string; size: number; min?: number; max?: number; onCommit: (value: number) => void }) {
  const [draft, setDraft] = useState(String(size));
  useEffect(() => setDraft(String(size)), [size]);
  return <input type="number" aria-label={`${label} width`} min={min} max={max} value={draft}
    onChange={event => setDraft(event.target.value)}
    onBlur={() => {
      const parsed = Number(draft);
      const next = draft.trim() && Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : size;
      setDraft(String(next)); onCommit(next);
    }}
    onKeyDown={event => { if (event.key === "Enter") { event.preventDefault(); event.currentTarget.blur(); } }} />;
}

// Pointer capture unifies mouse/touch and commits on release, including a finger
// lifting outside the table. Only the guide moves during tracking; rows do not render.
function ColumnResizeHandle({ size, min = 96, max = 640, onCommit, onReset }: { size: number; min?: number; max?: number; onCommit: (size: number) => void; onReset: () => void }) {
  const drag = useRef<{ pointerId: number; x: number; size: number } | null>(null);
  const nextSize = (x: number) => Math.min(max, Math.max(min, drag.current!.size + x - drag.current!.x));
  const clear = (element: HTMLDivElement) => { drag.current = null; element.style.transform = ""; delete element.dataset.resizing; };
  return <div className="stark-column-resizer" aria-hidden="true" onDoubleClick={onReset}
    onPointerDown={event => {
      if (event.button !== 0 || !event.isPrimary) return;
      event.preventDefault();
      drag.current = { pointerId: event.pointerId, x: event.clientX, size };
      event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.dataset.resizing = "true";
    }}
    onPointerMove={event => {
      if (drag.current?.pointerId === event.pointerId) event.currentTarget.style.transform = `translateX(${nextSize(event.clientX) - drag.current.size}px)`;
    }}
    onPointerUp={event => {
      if (drag.current?.pointerId !== event.pointerId) return;
      const next = nextSize(event.clientX);
      clear(event.currentTarget); event.currentTarget.releasePointerCapture(event.pointerId); onCommit(next);
    }}
    onPointerCancel={event => { if (drag.current?.pointerId === event.pointerId) clear(event.currentTarget); }}
    onLostPointerCapture={event => clear(event.currentTarget)} />;
}

const selectionId = "__stark_selection";
export function DataTable<T>({ data, columns, getRowId, caption = "Records", searchLabel = "Search records", searchPredicate, filters = [], searchable = true, enableSorting = true, enablePagination = true, enableSelection = false, enableColumnResizing = true, enableColumnVisibility = true, initialState, state, onStateChange, bulkActions, loading = false, error, onRetry, emptyContent = "No records yet.", noResultsContent = "No results match your search or filters.", className, ...props }: DataTableProps<T>) {
  const [internalState, setInternalState] = useState<DataTableState>(() => ({ pagination: { pageIndex: 0, pageSize: 10 }, ...initialState }));
  const [keyboard, setKeyboard] = useState(false);
  const id = useId();
  const tableColumns = useMemo<DataTableColumnDef<T>[]>(() => enableSelection ? [{
    id: selectionId, size: 60, minSize: 60, maxSize: 60, enableHiding: false, enableSorting: false, enableResizing: false,
    header: ({ table }) => <Checkbox aria-label="Select current page" checked={table.getIsAllPageRowsSelected()} indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()} onChange={table.getToggleAllPageRowsSelectedHandler()} />,
    cell: ({ row }) => <Checkbox aria-label={`Select row ${row.id}`} checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />,
  }, ...columns] : columns, [columns, enableSelection]);

  // TanStack may emit several state changes before the next React render.
  // Merge against the last emitted state, rather than a stale render snapshot.
  const currentState = useRef<TableState | null>(null);
  const update: OnChangeFn<TableState> = updater => {
    const next = functionalUpdate(updater, currentState.current ?? table.getState());
    currentState.current = next;
    setInternalState(next);
    onStateChange?.(next);
  };
  const table = useReactTable({
    data, columns: tableColumns, getRowId,
    state: { ...internalState, ...state }, onStateChange: update,
    defaultColumn: { size: 160, minSize: 96, maxSize: 640 },
    initialState, enableSorting, sortDescFirst: false, enableMultiSort: false, enableRowSelection: enableSelection,
    enableColumnResizing, columnResizeMode: "onEnd", enableHiding: enableColumnVisibility,
    getCoreRowModel: getCoreRowModel(), getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    globalFilterFn: searchPredicate ? (row, _columnId, value) => searchPredicate(row.original, String(value).trim()) : "includesString",
  });
  currentState.current = table.getState();
  const query = String(table.getState().globalFilter ?? "");
  const filterSignature = JSON.stringify(table.getState().columnFilters);
  const previousQuery = useRef(`${query}:${filterSignature}`);
  // Query changes invalidate selections even when a parent controls table state.
  useEffect(() => {
    const key = `${query}:${filterSignature}`;
    if (previousQuery.current !== key) {
      previousQuery.current = key;
      update(previous => ({ ...previous, rowSelection: {}, pagination: { ...previous.pagination, pageIndex: 0 } }));
    }
  }, [query, filterSignature]); // The table instance remains stable; callbacks read its latest options.
  const count = table.getFilteredRowModel().rows.length;
  const selected = table.getSelectedRowModel().flatRows.map(row => row.original);
  const { pageIndex, pageSize } = table.getState().pagination;
  const filtered = !!query || table.getState().columnFilters.length > 0;
  const clearFilters = () => { table.setState(previous => ({ ...previous, globalFilter: "", columnFilters: [], rowSelection: {}, pagination: { ...previous.pagination, pageIndex: 0 } })); };
  const settingsColumns = table.getAllLeafColumns().filter(column => column.id !== selectionId);

  return <div {...props} className={cn("stark-data-table", className)} aria-busy={loading}>
    <div className="stark-table-toolbar">
      {searchable && <Input label={searchLabel} placeholder={searchLabel} hideLabel type="text" role="searchbox" value={query} onChange={event => table.setGlobalFilter(event.target.value)} leadingItem={<Search aria-hidden="true" />} fullWidth />}
      <div className="stark-table-filters">{filters.map(filter => {
        const column = table.getColumn(filter.columnId);
        const value = column?.getFilterValue();
        const common = { label: filter.label, options: filter.options, placeholder: filter.placeholder ?? `All ${filter.label.toLowerCase()}` };
        return filter.multiple
          ? <Dropdown key={filter.columnId} {...common} multiple value={Array.isArray(value) ? value : value ? [String(value)] : []} onValueChange={values => column?.setFilterValue(values.length ? values : undefined)} />
          : <Dropdown key={filter.columnId} {...common} value={String(value ?? "")} onValueChange={value => column?.setFilterValue(value || undefined)} />;
      })}
      {filtered && <Button type="button" className="stark-template-button" label="Clear filters" onClick={clearFilters} />}
      {(enableColumnVisibility || enableColumnResizing) && <Popover.Root>
        <Popover.Trigger asChild><Button type="button" className="stark-template-button" label="Columns" leadingIcon={<Settings2 />} onClick={event => setKeyboard(event.detail === 0)} /></Popover.Trigger>
        <Popover.Portal><Popover.Content className="stark-column-popover" data-keyboard={keyboard || undefined} align="end" sideOffset={8} collisionPadding={16} aria-labelledby={`${id}-columns`}>
          <div className="stark-page-heading"><h2 id={`${id}-columns`}>Columns</h2><Popover.Close asChild><IconButton type="button" className="stark-template-icon" aria-label="Close column settings" icon={<X />} /></Popover.Close></div>
          <div className="stark-column-list">{settingsColumns.map(column => {
            const label = typeof column.columnDef.header === "string" ? column.columnDef.header : column.id;
            return <div className="stark-column-setting" key={column.id}>
              {enableColumnVisibility ? <Checkbox label={label} checked={column.getIsVisible()} disabled={!column.getCanHide()} onChange={column.getToggleVisibilityHandler()} /> : <span>{label}</span>}
              {column.getCanResize() && <label className="stark-width-label"><span className="stark-sr-only">{label} width</span><ColumnWidthInput label={label} size={column.getSize()} min={column.columnDef.minSize} max={column.columnDef.maxSize} onCommit={value => table.setColumnSizing(previous => ({ ...previous, [column.id]: value }))} /><span aria-hidden="true">px</span></label>}
            </div>;
          })}</div>
          <Button type="button" label="Reset columns" className="stark-template-button" onClick={() => table.setState(previous => ({ ...previous, columnSizing: {}, columnVisibility: {} }))} />
        </Popover.Content></Popover.Portal>
      </Popover.Root>}
      </div>
    </div>
    {!loading && !error && <div className="stark-table-summary"><span role="status">{count} {count === 1 ? "result" : "results"}{selected.length > 0 ? ` · ${selected.length} selected` : ""}</span>
      {selected.length > 0 && <div className="stark-actions">{bulkActions?.(selected, () => table.resetRowSelection(true))}<Button className="stark-template-button" type="button" label="Clear selection" onClick={() => table.resetRowSelection(true)} /></div>}
    </div>}
    {loading ? <div className="stark-table-message" role="status">Loading records…</div> : error ? <div className="stark-table-message"><div role="alert">{error}</div>{onRetry && <Button type="button" className="stark-template-button" label="Try again" onClick={onRetry} />}</div> : count === 0 ? <div className="stark-table-message" role="status">{filtered ? noResultsContent : emptyContent}</div> : <>
      <div className="stark-table-scroll" role="region" aria-label={`${caption} table`} tabIndex={0}>
        <table style={{ width: table.getTotalSize() }}>
          <caption className="stark-sr-only">{caption}</caption>
          <colgroup>{table.getVisibleLeafColumns().map(column => <col key={column.id} style={{ width: column.getSize() }} />)}</colgroup>
          <thead>{table.getHeaderGroups().map(group => <tr key={group.id}>{group.headers.map(header => <th key={header.id} scope="col" aria-sort={header.column.getCanSort() ? header.column.getIsSorted() === "asc" ? "ascending" : header.column.getIsSorted() === "desc" ? "descending" : "none" : undefined}>
            {!header.isPlaceholder && (header.column.getCanSort() ? <TextButton type="button" className="stark-table-sort justify-start" fullWidth onClick={header.column.getToggleSortingHandler()} label={flexRender(header.column.columnDef.header, header.getContext())} trailingIcon={header.column.getIsSorted() === "asc" ? <ArrowUp aria-hidden="true" /> : header.column.getIsSorted() === "desc" ? <ArrowDown aria-hidden="true" /> : <span aria-hidden="true">↕</span>} /> : flexRender(header.column.columnDef.header, header.getContext()))}
            {header.column.getCanResize() && <ColumnResizeHandle size={header.getSize()} min={header.column.columnDef.minSize} max={header.column.columnDef.maxSize} onReset={() => header.column.resetSize()} onCommit={size => table.setColumnSizing(previous => ({ ...previous, [header.column.id]: size }))} />}
          </th>)}</tr>)}</thead>
          <tbody>{table.getRowModel().rows.map(row => <tr key={row.id} data-selected={row.getIsSelected() || undefined}>{row.getVisibleCells().map(cell => <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}</tr>)}</tbody>
        </table>
      </div>
      {enablePagination && <div className="stark-table-pagination">
        <Dropdown label="Rows per page" clearable={false} containerClassName="stark-page-size" value={String(pageSize)} onValueChange={value => table.setPageSize(Number(value))} options={[...new Set([10, 25, 50, pageSize])].sort((a, b) => a - b).map(size => ({ label: String(size), value: String(size) }))} />
        <span>{pageIndex * pageSize + 1}–{Math.min((pageIndex + 1) * pageSize, count)} of {count}</span>
        <div className="stark-actions"><IconButton className="stark-template-icon" aria-label="Previous page" type="button" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} icon={<ChevronLeft />} /><span>Page {pageIndex + 1} of {table.getPageCount()}</span><IconButton className="stark-template-icon" aria-label="Next page" type="button" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} icon={<ChevronRight />} /></div>
      </div>}
    </>}
  </div>;
}
