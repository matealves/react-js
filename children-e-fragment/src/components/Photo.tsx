// import { Fragment } from "react";

import { ReactNode } from "react";

type Props = {
  url?: string;
  legend: string;
  children: ReactNode;
};

export const Photo = ({ url, legend, children }: Props) => {
  return (
    // <Fragment>
    <>
      {children}
      <p>{legend}</p>
    </>
    // </Fragment>
  );
};
