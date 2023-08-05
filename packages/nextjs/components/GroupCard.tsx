import React from "react";

interface Props {
  nameOfGroup: string;
}

export const GroupCard: React.FC<Props> = props => {
  const { nameOfGroup } = props;
  return (
    <>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{nameOfGroup}</h2>
          <p>This group is probably epic</p>
        </div>
      </div>
    </>
  );
};
