import React from "react";
function Definition({ definition }) {
  return (
    <div className="row">
      <div className="col">
        <p className="num">i</p>
      </div>
      <div className="col">
        <h3 className="type">{definition.type}</h3>
        <p className="definition">{definition.definition}</p>
        <p className="example">{definition.sample}</p>
      </div>
    </div>
  );
}

Definition.defaultProps = {
  definition: {
    type: "verb",
    definition: "greet (someone arriving) in a polite or friendly way.",
    sample: "Welcome to aDictionary",
  },
};

export default Definition;
