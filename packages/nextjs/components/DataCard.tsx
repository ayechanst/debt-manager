import React from "react";

interface Props {
  name: string;
  balance: number;
  spendings: number;
}

export const DataCard: React.FC<Props> = props => {
  const { name, balance, spendings } = props;
  return (
    <>
      <div>
        <div className="collapse bg-base-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Name: {name}
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>Balance: {balance}</p>
            <p>Total Spendings: {spendings}</p>
          </div>
        </div>
      </div>
    </>
  );
};
