import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Card,
  Col,
  InputGroup,
  Form,
  Button,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

// pics

import pic8 from "../../assets/images/UserImages/U1.jpg";
import pic3 from "../../assets/images/UserImages/U2.jpg";
import pic12 from "../../assets/images/UserImages/U3.jpg";
import pic7 from "../../assets/images/UserImages/U4.jpg";
import pic9 from "../../assets/images/UserImages/U5.jpg";
import pic11 from "../../assets/images/UserImages/U6.jpg";
import pic2 from "../../assets/images/UserImages/U8.jpg";
import pic10 from "../../assets/images/UserImages/U10.jpg";
import pic1 from "../../assets/images/UserImages/U11.jpg";
import pic4 from "../../assets/images/UserImages/U12.jpg";
import pic5 from "../../assets/images/UserImages/U13.jpg";
import pic6 from "../../assets/images/UserImages/U21.jpg";

export const COLUMNS = [
  {
    Header: "S NO",
    accessor: "SNO",
    className: "text-center ",
  },
  {
    Header: "PHOTO",
    accessor: "PHOTO",
    className: "text-center ",
  },
  {
    Header: "NAME",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "DATE",
    accessor: "DATE",
    className: "text-center ",
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
  },
];

export const DATATABLE = [
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic1} className="avatar avatar-md br-7" alt="" />,
    NAME: "Roman Smith",
    DATE: "10 Aug 2005",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic2} className="avatar avatar-md br-7" alt="" />,
    NAME: "Nora Miller",
    DATE: "	16 feb 2008",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic3} className="avatar avatar-md br-7" alt="" />,
    NAME: "Oliver josheph",
    DATE: "	07 Jun 2011",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic4} className="avatar avatar-md br-7" alt="" />,
    NAME: "Graham Garcia",
    DATE: "	10 July 2008",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic5} className="avatar avatar-md br-7" alt="" />,
    NAME: "Anthony Johnson",
    DATE: "05 Jan 1998",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic6} className="avatar avatar-md br-7" alt="" />,
    NAME: "Benjamin Williams",
    DATE: "31 Dec 2019",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic7} className="avatar avatar-md br-7" alt="" />,
    NAME: "Ava Jones",
    DATE: "	02 Feb 2018",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic8} className="avatar avatar-md br-7" alt="" />,
    NAME: "Camila Davis",
    DATE: "	17 Jan 1999",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic9} className="avatar avatar-md br-7" alt="" />,
    NAME: "Jonathan Miller",
    DATE: "	5 Dec 2007",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic10} className="avatar avatar-md br-7" alt="" />,
    NAME: "Ellie Walker",
    DATE: "10 Jan 2022",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic11} className="avatar avatar-md br-7" alt="" />,
    NAME: "David Davis",
    DATE: "	03 Oct 2007",
  },
  {
    SNO: <Form.Check className="align-middle " />,
    ACTION: (
      <span className="text-center align-middle">
        <ButtonGroup size="sm" className="flex-nowrap">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Button>Edit</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>
    ),
    PHOTO: <img src={pic12} className="avatar avatar-md br-7" alt="" />,
    NAME: "John Puncher",
    DATE: "19 Dec 2020",
  },
];
export const UserList = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Col lg={12} xl={12}>
        <InputGroup className="mb-5">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <InputGroup.Text className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </InputGroup.Text>
        </InputGroup>
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="page-options ms-auto">
              <Form.Select className="form-control select2 w-100">
                <option value="asc">Latest</option>
                <option value="desc">Oldest</option>
              </Form.Select>
            </div>
          </Card.Header>
          <div className="e-table px-5 pb-5">
            <div className="table-responsive ">
              <div className="d-flex">
                <select
                  className=" mb-4 table-border me-1"
                  value={pageSize}
                  // onClick={()=>{getRandomUppercaseChar()}}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className={column.className}
                        >
                          <span className="tabletitle">
                            {column.render("Header")}
                          </span>
                          {/* <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="fa fa-angle-down"></i>
                              ) : (
                                <i className="fa fa-angle-up"></i>
                              )
                            ) : (
                              ""
                            )}
                          </span> */}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="text-center" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex mt-4 ">
                <span className="">
                  Page
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <span className="ms-auto ">
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {" Previous "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" << "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" < "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" > "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" >> "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {" Next "}
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};
