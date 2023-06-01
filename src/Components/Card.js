import React, { useEffect } from "react";
import Button from "./Button";

const Card = ({ header, caption, actionButton, children }) => {
  const bodyContent = React.Children.toArray(children).find(
    (child) => child.type?.displayName === "Card.Body"
  );

  // const sectionContent = bodyContent
  //   ? React.Children.toArray(bodyContent.props.children).filter(
  //       (child) => child.type?.displayName === "Card.Section"
  //     )
  //   : [];

  const footerContent = React.Children.toArray(children).find(
    (child) => child.type.displayName === "Card.Footer"
  );

  console.log(bodyContent);

  return (
    <div className="bg-white border border-outline-default rounded-4px">
      <div className="card-header flex flex-row px-24px pt-24px pb-16px">
        <div className="flex flex-col w-full">
          <h6 className="text-h6 font-bold text-black">{header}</h6>
          <span className="text-body text-copy-caption">{caption}</span>
        </div>
        {actionButton && (
          <Button label={actionButton.label} onClick={actionButton.onClick} />
        )}
      </div>
      {bodyContent && (
        <Card.Body className={bodyContent.props.className}>
          {bodyContent}
          {/* {sectionContent?.length > 0 &&
            sectionContent.map((section, index, arr) => (
              <Card.Section
                key={index}
                className={`${section.props.className} ${
                  index < sectionContent.length - 1 ? "-mb-[1px]" : ""
                }`}
              >
                {section.props.children}
              </Card.Section>
            ))} */}
        </Card.Body>
      )}
      {footerContent && (
        <Card.Footer className={footerContent.props.className}>
          {footerContent.props.children}
        </Card.Footer>
      )}
    </div>
  );
};

Card.Body = ({ children, className }) => {
  return <div className={`card-body w-full ${className}`}>{children}</div>;
};

Card.Body.displayName = "Card.Body";

Card.Section = ({ children, className }) => {
  return (
    <div
      className={`card-section w-full border-y border-outline-default p-24px -mb-[1px] last:mb-[0px] ${className}`}
    >
      {children}
    </div>
  );
};

Card.Section.displayName = "Card.Section";

Card.Footer = ({ children, className }) => {
  return (
    <div
      className={`card-footer px-24px pb-16px pt-16px flex items-center gap-16px  ${className}`}
    >
      {children}
    </div>
  );
};

Card.Footer.displayName = "Card.Footer";

export default Card;
