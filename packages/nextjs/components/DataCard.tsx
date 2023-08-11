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
        <div className="card w-96 h-full bg-base-100 shadow-xl m-3">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div>Balance: {balance}</div>
            <div>Total Spendings: {spendings}</div>
          </div>
        </div>
      </div>
    </>
  );
};
