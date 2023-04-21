import { useState } from "react";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import Checkbox from "./components/molecules/Checkbox";
import OptionList from "./components/OptionList";
import Switch from "./components/molecules/Switch";
import Avatar from "./components/molecules/Avatar";
import Badge from "./components/molecules/Badge";
import StatusIndicator from "./components/molecules/StatusIndicator";
import Select from "./components/Select";
import Combobox from "./components/Combobox";
import Menu from "./components/Menu";

function App() {
  const [selectedRadioValues, setSelectedRadioValues] = useState(["radio-1"]);
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState([
    "checkbox-1",
    "checkbox-2",
  ]);
  const [switchToggled, setSwitchToggled] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: "1", value: "rizalPark", label: "Rizal Park" },
    { id: "2", value: "intramuros", label: "Intramuros", disabled: true },
    { id: "3", value: "fortSantiago", label: "Fort Santiago" },
    { id: "4", value: "chocolateHills", label: "Chocolate Hills" },
    { id: "5", value: "tubbatahaReef", label: "Tubbataha Reef" },
    { id: "6", value: "mayonVolcano", label: "Mayon Volcano" },
    { id: "7", value: "banaueRiceTerraces", label: "Banaue Rice Terraces" },
    {
      id: "8",
      value: "puertoPrincesaSubterraneanRiver",
      label: "Puerto Princesa Subterranean River",
    },
  ];

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    console.log(checkTerms);
    console.log(selectedRadioValues);
    console.log(selectedCheckboxValues);
    console.log(switchToggled);
    console.log(selectedOption.value);
  };

  const handleLabelAction = (e) => {
    alert("Label action fired");
  };

  const radioOptions = [
    { id: "radio-1", label: "Radio Option 1" },
    { id: "radio-2", label: "Radio Option 2" },
    {
      id: "radio-3",
      label: "Radio Option 3",
      helpText: "You can also provide a helpText",
    },
  ];

  const checkboxOptions = [
    { id: "checkbox-1", label: "Checkbox Option 1" },
    { id: "checkbox-2", label: "Checkbox Option 2" },
    {
      id: "checkbox-3",
      label: "Checkbox Option 3",
      helpText: "You can also provide a helpText",
    },
  ];

  const links = [
    {
      label: "User",
      items: [
        {
          href: "/account-settings",
          label: "My Account",
          icon: <i className="ri-user-line" />,
        },
        {
          href: "/sign-out",
          label: "Sign out",
          icon: <i className="ri-login-box-line" />,
        },
      ],
    },
    {
      label: "Info",
      items: [
        {
          href: "/support",
          label: "Support",
          icon: <i className="ri-lifebuoy-line" />,
        },
        {
          href: "/license",
          label: "License",
          icon: <i className="ri-article-line" />,
        },
      ],
    },
  ];

  const [finishedComponents, setFinishedComponents] = useState([
    "molecules",
    "buttons",
    "option",
    "switch",
    "inputfields",
    "indicator",
    "badge",
    "avatar",
    "select",
    "combobox",
    "menu",
    "richtext",
    "maskedinput",
  ]);
  const componentsList = [
    { id: "molecules", label: "Molecules (Color and Spacing Tokens)" },
    { id: "buttons", label: "Button (Solid, Ghost, Text, and Icon)" },
    { id: "option", label: "OptionList (Radio and Checkbox)" },
    { id: "switch", label: "Switch" },
    { id: "inputfields", label: "Input Field (Text/Text Area)" },
    { id: "indicator", label: "Indicator" },
    { id: "badge", label: "Badge" },
    { id: "avatar", label: "Avatar" },
    { id: "select", label: "Select" },
    { id: "combobox", label: "Combobox" },
    { id: "menu", label: "Menu" },
    { id: "richtext", label: "Input Field (Rich Text)" },
    { id: "maskedinput", label: "Input Field (Masked)" },
    { id: "cards", label: "Card Variants" },
    { id: "modal", label: "Modal (with Hooks)" },
    { id: "alert", label: "Alert (with Hooks)" },
    { id: "media", label: "Upload (File/Media)" },
    { id: "table", label: "Table" },
    { id: "breadcrumbs", label: "Breadcrumbs" },
    { id: "tab", label: "Tab" },
    { id: "navbar", label: "Navbar" },
    { id: "ProgressBar", label: "Progress Bar" },
    { id: "step", label: "Step" },
    { id: "map", label: "Location Field" },
    { id: "empty", label: "EmptyState" },
    { id: "layout-table", label: "Page Layout: Table List" },
    { id: "layout-wizard", label: "Page Layout: Add Wizard" },
    { id: "layout-profile", label: "Page Layout: Profile" },
  ];

  return (
    <div className="App">
      <h1 className="text-display font-bold text-black p-24px font-default flex flex-row gap-40px w-full px-[170px]">
        Stark Design System
      </h1>

      <div className="flex flex-row gap-40px w-full px-[170px] mb-40px">
        <div className="flex flex-col gap-16px">
          <h1 className="text-paragraph-title w-fit text-black font-default font-bold">
            Snug Text Block
          </h1>
          <p className="text-body leading-snug font-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem
            nihil vel, pariatur perferendis cum officiis eligendi aliquid facere
            natus, tenetur officia ab architecto obcaecati amet, illo accusamus.
            Nihil, perferendis.
          </p>
          <Button small primary />
        </div>

        <div className="flex flex-col gap-16px">
          <h1 className="text-paragraph-title w-fit text-black font-default font-bold">
            Relaxed Text Block
          </h1>
          <p className="text-body leading-relaxed font-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem
            nihil vel, pariatur perferendis cum officiis eligendi aliquid facere
            natus, tenetur officia ab architecto obcaecati amet, illo accusamus.
            Nihil, perferendis.
          </p>
          <div className="flex flex-row gap-4px">
            <Button small primary />
            <IconButton icon={<i className="ri-menu-line"></i>} small />
          </div>
        </div>

        <div className="flex flex-col gap-16px">
          <h1 className="text-paragraph-title w-fit text-black font-default font-bold">
            Loose Text Block
          </h1>
          <p className="text-body leading-loose font-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem
            nihil vel, pariatur perferendis cum officiis eligendi aliquid facere
            natus, tenetur officia ab architecto obcaecati amet, illo accusamus.
            Nihil, perferendis.
          </p>
          <Button small primary />
        </div>
      </div>

      <div className=" flex flex-row gap-40px w-full px-[170px]">
        <div className="flex flex-col gap-24px w-full">
          <div className="p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Dropdown
            </h1>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Menu links={links} label="Main Menu" />
            </div>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Sample Form
            </h1>
            <form className=" flex flex-col gap-24px" onSubmit={submitHandler}>
              <InputField
                email
                label="Username"
                id="username"
                placeholder="Enter your username"
                attachedButton={<Button label="Check" />}
                leadingItem={<i className="ri-user-fill"></i>}
                trailingItem={<i className="ri-check-line" />}
                labelAction={{
                  label: "Action",
                  action: handleLabelAction,
                }}
                helpText="This can either be your username or email"
              />
              <InputField type="password" label="Password" id="password" />
              <InputField type="number" label="Quantity" id="number" />
              <InputField
                type="email"
                label="Email"
                id="email"
                placeholder="Enter your email"
                helpText="Use your Google email"
                error="Enter a valid email address"
              />
              <InputField
                label="Contact Number"
                id="contactnumber"
                mask="9999 999 9999"
                placeholder="-"
                value="09"
              />
              <InputField
                type="richtext"
                label="Description"
                id="description"
              />
              <InputField type="textarea" label="State Reason" id="reason" />
              <Select
                label="My Select Label"
                id="my-select"
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder="Choose an option"
                labelAction={{
                  label: "Action",
                  action: handleLabelAction,
                }}
                multiple
              />

              <Combobox
                label="Example Combobox"
                id="example-combobox"
                options={options}
                onChange={handleSelectChange}
                placeholder="Your favorite place to go to date"
              />
              <div className="flex flex-row gap-16px">
                <Checkbox
                  name="terms-conditions"
                  id="terms-conditions"
                  label="I accept the terms and conditions"
                  onChange={() => setCheckTerms(!checkTerms)}
                  checked={checkTerms}
                />
              </div>

              <div className="flex flex-row items-center gap-8px">
                <Button small primary label="Login" submit />
                <span className="text-body text-copy-caption font-semibold">
                  or
                </span>
                <Button
                  text
                  label="Register now"
                  onClick={() => alert("Clicked!")}
                />
              </div>
            </form>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Checkbox, Radio, Switch, Option List
            </h1>
            <div className="flex flex-col gap-24px">
              <div className="flex flex-col gap-12px justify-start">
                <h3 className="text-paragraph-title font-semibold text-black">
                  Radio Option List
                </h3>
                <OptionList
                  id="radioList"
                  type="radio"
                  options={radioOptions}
                  selectedValues={selectedRadioValues}
                  onChange={setSelectedRadioValues}
                  name="example-radio-group"
                />
              </div>
              <div className="flex flex-col gap-12px justify-start">
                <h3 className="text-paragraph-title font-semibold text-black">
                  Checkbox Option List
                </h3>
                <OptionList
                  id="checkboxList"
                  type="checkbox"
                  options={checkboxOptions}
                  selectedValues={selectedCheckboxValues}
                  onChange={setSelectedCheckboxValues}
                />
              </div>
              <div className="flex flex-col gap-12px justify-start">
                <h3 className="text-paragraph-title font-semibold text-black">
                  Switch
                </h3>
                <Switch
                  id="product-switch"
                  checked={switchToggled}
                  label="This is turned on"
                  helpText={switchToggled ? "Turned on" : "Turned off"}
                  onChange={() => setSwitchToggled(!switchToggled)}
                />
              </div>
            </div>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Buttons
            </h1>

            <div className="flex flex-col gap-24px">
              <div className="flex flex-col gap-8px">
                <span className="text-caption font-semibold uppercase tracking-wide text-copy-caption">
                  Types
                </span>
                <div className="flex flex-row gap-8px items-center">
                  <Button label="Solid Button" primary />
                  <Button label="Outline Button" outline primary />
                  <Button label="Text Button" text secondary />
                </div>
              </div>
              <div className="flex flex-col gap-8px">
                <span className="text-caption font-semibold uppercase tracking-wide text-copy-caption">
                  Colors
                </span>
                <div className="flex flex-row gap-8px items-center">
                  <Button label="default" />
                  <Button primary label="primary" />
                  <Button secondary label="secondary" />
                  <Button info label="info" />
                </div>
                <div className="flex flex-row gap-8px items-center">
                  <Button success label="success" />
                  <Button danger label="danger" />
                  <Button warning label="warning" />
                </div>
              </div>
              <div className="flex flex-col gap-8px items-start">
                <span className="text-caption font-semibold uppercase tracking-wide text-copy-caption">
                  Sizes
                </span>
                <div className="flex flex-row gap-8px">
                  <Button small label="Small Button" />
                  <Button label="Medium Button" primary />
                  <Button label="Large Button" large secondary />
                </div>
              </div>
            </div>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Avatar
            </h1>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Avatar tiny text="MN" />
              <Avatar small text="MN" />
              <Avatar default text="MN" />
              <Avatar large text="MN" />
              <Avatar xlarge text="MN" />
            </div>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Avatar tiny icon={<i className="ri-account-circle-fill"></i>} />
              <Avatar small />
              <Avatar default />
              <Avatar large />
              <Avatar xlarge />
            </div>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Avatar
                tiny
                image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <Avatar
                small
                image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <Avatar
                default
                image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <Avatar
                large
                image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <Avatar
                xlarge
                image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Badge
            </h1>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Badge label="Badge" circular />
              <Badge
                label="Available"
                outline
                success
                leadingItem={<StatusIndicator medium status="online" />}
                circular
              />
              <Badge
                label="Unavailable"
                outline
                danger
                leadingItem={<StatusIndicator medium status="away" />}
              />
              <Badge label="Badge" secondary dismissible />
            </div>
            <div className="flex flex-row gap-8px items-center justify-center">
              <Badge label="Badge" />
              <Badge label="Badge" secondary />
              <Badge label="Badge" info />
              <Badge label="Badge" success />
              <Badge label="Badge" warning />
              <Badge label="Badge" danger />
            </div>

            <div className="flex flex-row gap-8px items-center justify-center">
              <Badge
                label="Noya, Mark"
                outline
                leadingItem={<Avatar tiny />}
                circular
              />
              <Badge label="Badge" outline secondary />
              <Badge label="Badge" outline info />
              <Badge label="Badge" outline success />
              <Badge label="Badge" outline warning />
              <Badge label="Badge" outline danger />
            </div>
          </div>
          <div className="p-40px border border-outline-default rounded-8px w-full flex flex-col items-start gap-24px">
            <h1 className="text-section-title font-bold pb-24px text-black">
              Status Indicator
            </h1>

            <div className="flex flex-row gap-8px items-center justify-center">
              <StatusIndicator medium status="online" />
              <StatusIndicator medium status="offline" />
              <StatusIndicator medium status="busy" />
              <StatusIndicator medium status="away" />
            </div>
            <div className="flex flex-row gap-8px items-center justify-center">
              <StatusIndicator small status="online" />
              <StatusIndicator medium status="offline" />
              <StatusIndicator large status="busy" />
            </div>
          </div>
        </div>

        <div className="p-40px w-full h-fit border border-outline-default rounded-8px">
          <h1 className="text-section-title font-bold text-black">
            Foundations and Components
          </h1>
          <OptionList
            type="checkbox"
            id="components-list"
            options={componentsList}
            selectedValues={finishedComponents}
            onChange={() => setFinishedComponents}
            name="Components"
            className="mt-20px"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
