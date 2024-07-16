import { ReactNode } from "react";

type Props = { children: ReactNode };

const Table = ({ children, ...props }: Props) => {
  return (
    <table className="table-auto" {...props}>
      {children}
    </table>
  );
};
const Thead = ({ children, ...props }: Props) => {
  return <thead {...props}>{children}</thead>;
};
const TRow = ({ children, ...props }: Props) => {
  return <tr {...props}>{children}</tr>;
};
const TH = ({ children, ...props }: Props) => {
  return <th {...props}>{children}</th>;
};
const TD = ({ children, ...props }: Props) => {
  return <td {...props}>{children}</td>;
};
const Tbody = ({ children, ...props }: Props) => {
  return <tbody {...props}>{children}</tbody>;
};

Table.Header = Thead;
Table.Body = Tbody;
Table.Row = TRow;
Table.Head = TH;
Table.Cell = TD;

export default Table;
