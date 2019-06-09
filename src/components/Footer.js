import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilter } from "../actions";

function Footer() {
  return (
    <div>
      Показать:
      <FilterLink filter={VisibilityFilter.SHOW_ALL}>Все</FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
        Завершенные
      </FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Активные</FilterLink>
    </div>
  );
}

export default Footer;
