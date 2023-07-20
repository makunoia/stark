import React from "react";
import Table, { Cell } from "../components/Table";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export default {
  title: "Table",
  component: Table,
};

const SampleData = {
  current_page: 1,
  data: [
    {
      id: 1,
      service: "Casa Nenita Hall",
      capacity_max: 240,
      capacity_min: 100,
      unit_of_measure: "guests",
      status: "listed",
      created_at: "2023-06-01T01:45:25.000000Z",
      updated_at: "2023-06-01T02:42:18.000000Z",
    },
    {
      id: 2,
      service: "Beachside Villa",
      capacity_max: 150,
      capacity_min: 50,
      unit_of_measure: "guests",
      status: "unlisted",
      created_at: "2023-05-30T09:15:10.000000Z",
      updated_at: "2023-05-31T14:20:05.000000Z",
    },
    {
      id: 3,
      service: "Mountain Retreat",
      capacity_max: 80,
      capacity_min: 20,
      unit_of_measure: "guests",
      status: "listed",
      created_at: "2023-05-28T16:30:45.000000Z",
      updated_at: "2023-05-29T11:55:22.000000Z",
    },
    {
      id: 4,
      service: "Seaside Cottage",
      capacity_max: 100,
      capacity_min: 30,
      unit_of_measure: "guests",
      status: "unlisted",
      created_at: "2023-06-02T08:20:12.000000Z",
      updated_at: "2023-06-03T16:45:40.000000Z",
    },
    {
      id: 5,
      service: "Urban Loft",
      capacity_max: 60,
      capacity_min: 10,
      unit_of_measure: "guests",
      status: "listed",
      created_at: "2023-06-04T12:30:05.000000Z",
      updated_at: "2023-06-05T09:55:55.000000Z",
    },
    {
      id: 6,
      service: "Rustic Cabin",
      capacity_max: 80,
      capacity_min: 20,
      unit_of_measure: "guests",
      status: "unlisted",
      created_at: "2023-06-02T16:10:20.000000Z",
      updated_at: "2023-06-04T10:25:30.000000Z",
    },
    {
      id: 7,
      service: "Garden Oasis",
      capacity_max: 120,
      capacity_min: 50,
      unit_of_measure: "guests",
      status: "listed",
      created_at: "2023-06-03T09:45:15.000000Z",
      updated_at: "2023-06-05T12:20:35.000000Z",
    },
    {
      id: 8,
      service: "Historic Manor",
      capacity_max: 200,
      capacity_min: 80,
      unit_of_measure: "guests",
      status: "unlisted",
      created_at: "2023-06-04T14:55:40.000000Z",
      updated_at: "2023-06-06T08:10:50.000000Z",
    },
    {
      id: 9,
      service: "Lake View Lodge",
      capacity_max: 150,
      capacity_min: 50,
      unit_of_measure: "guests",
      status: "listed",
      created_at: "2023-06-05T11:20:25.000000Z",
      updated_at: "2023-06-06T16:35:15.000000Z",
    },
    {
      id: 10,
      service: "Coastal Retreat",
      capacity_max: 100,
      capacity_min: 40,
      unit_of_measure: "guests",
      status: "unlisted",
      created_at: "2023-06-06T09:30:55.000000Z",
      updated_at: "2023-06-07T14:15:20.000000Z",
    },
  ],
  next_page_url: "https://www.eventful.ph/api/service_and_packages?page=2",
  path: "https://www.eventful.ph/api/service_and_packages",
  per_page: 10,
  prev_page_url: "https://www.eventful.ph/api/service_and_packages?page=1",
  to: 120,
  total: 280,
};

const DataTableTemplate = (args) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const selectTableHandler = useCallback(
    (newRow) => {
      if (selectedRows.find((id) => id === newRow)) {
        setSelectedRows((selectedRows) =>
          selectedRows.filter((id) => id !== newRow)
        );
      } else setSelectedRows((selectedRows) => [...selectedRows, newRow]);
    },
    [selectedRows]
  );

  const selectAllHandler = useCallback(() => {
    const rowData = SampleData.data.map((data) => data.id);

    if (selectedRows.length != 0) {
      setSelectedRows(() => []);
    } else setSelectedRows(rowData);
  }, [selectedRows]);

  useEffect(() => console.log(selectedRows), [selectedRows]);

  return (
    <div>
      <Table selectable>
        <Table.Head
          headings={["Service", "Status", "Max Capacity", "Min Capacity"]}
          checkbox={{
            onChange: () => selectAllHandler(),
            checked: selectedRows.length == SampleData.data.length,
            indeterminate: selectedRows.length !== 0,
          }}
        />
        <Table.Body>
          {SampleData.data.map((data, index) => {
            const rowID = data.id;

            return (
              <Table.Row
                key={rowID}
                selected={selectedRows.filter((id) => id === rowID).length > 0}
                onClick={() => selectTableHandler(rowID)}
              >
                <Cell.Checkbox
                  name={`checkbox-${data.id}`}
                  id={`checkbox-${data.id}`}
                  onChange={() => selectTableHandler(rowID)}
                  checked={selectedRows.filter((id) => id === rowID).length > 0}
                />
                <Cell data={data.service} />
                <Cell data={data.status} />
                <Cell data={`${data.capacity_max} ${data.unit_of_measure}`} />
                <Cell data={`${data.capacity_min} ${data.unit_of_measure}`} />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export const DataTable = DataTableTemplate.bind({});
DataTable.args = {
  text: "Hey",
};
