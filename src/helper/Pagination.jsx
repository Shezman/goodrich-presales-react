import React from "react";
import Pagination from "react-js-pagination";
export function PaginationComponent(props) {
	return (
		<Pagination
          activePage={props.activePage}
          itemsCountPerPage={props.itemsCountPerPage}
          totalItemsCount={props.totalItemsCount}
          pageRangeDisplayed={props.pageRangeDisplayed}
          onChange={props.handlePageChange}
        />
	)
}