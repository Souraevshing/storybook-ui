import React, { useEffect, useState } from "react";
import { IFilterMenu } from "./Filter";

export interface IFilterMenuV2 {
    id: number;
    columnId: string;
    columnName: string;    
    type: "text" | "subText" | "label" | "link";
    children: {
        id: number;
        value: string;
    }[];
};

interface ISearchState {
    parentSearchItem: string;
    childSearchItem: string;
}

type FilterProps = {
    label: JSX.Element;
    filterHeaderLabel: string;
    filterResetLabel?: string;
    filterSubmitLabel?: string;
    isFilterOpen: boolean;
    childFilterHeaderLabel: string;
    filterFieldsWithChildMenu: IFilterMenuV2[];
    onApplyFilter(menu: IFilterMenuV2[]): void;
    onResetFilter(): void;
    onFilterChange(menu: IFilterMenuV2[]): void;
    defaultSelectedFilter: IFilterMenu | null;
    allowParentSearchBar: boolean;
    allowChildSearchBar: boolean;
};

/**
 * Filter component
 */
export const MuiFilter = ({
    label,
    filterHeaderLabel,
    childFilterHeaderLabel,
    filterResetLabel = "Reset",
    filterSubmitLabel = "Apply",
    // for dummy menu refer to utils/dummyFilter.json
    filterFieldsWithChildMenu,
    defaultSelectedFilter = null,
    onApplyFilter,
    onResetFilter,
    onFilterChange,
    allowParentSearchBar = true,
    isFilterOpen,
    allowChildSearchBar = true,
    ...props
}: FilterProps) => {
    const [filterState, setFilterState] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<IFilterMenu | null>(
        defaultSelectedFilter
    );
    const [listOfFilter, setListOfFilter] = useState<IFilterMenu[]>(
        filterFieldsWithChildMenu.map((filter) => {
            return {
                id: filter.columnId,
                label: filter.columnName,
                value: filter.type,
                childFilters: filter.children.map((child) => {
                    return {
                        id: child.id,
                        label: child.value,
                        value: child.value.replace(" ", "_")
                    }
                })
            }

        })
    );

    const [filteredChildList, setFilteredChildList] = useState<
        IFilterMenu[] | []
    >([]);
    const [filteredParentList, setFilteredParentList] = useState<
        IFilterMenu[] | []
    >([]);

    const [searchState, setSearch] = useState<ISearchState>({
        childSearchItem: "",
        parentSearchItem: "",
    });
    useEffect(() => {
        setFilterState(!isFilterOpen);
    }, [isFilterOpen]);

    useEffect(() => {
        // filtering values on search bar changes
        const childFilters = selectedMenu?.childFilters?.filter((filter) => {
            return filter.label
                .trim()
                .toLowerCase()
                .includes(searchState.childSearchItem);
        });
        childFilters?.length
            ? setFilteredChildList([...childFilters])
            : setFilteredChildList([]);

        const parentFilter = listOfFilter.filter((filter) => {
            return filter.label
                .trim()
                .toLowerCase()
                .includes(searchState.parentSearchItem);
        });

        parentFilter && parentFilter.length
            ? setFilteredParentList(parentFilter)
            : setFilteredParentList([]);
    }, [listOfFilter, searchState, selectedMenu?.childFilters]);

    const searchSVG = () => {
        return (
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.2825 14.2058L12.5001 11.4458C13.5801 10.0991 14.1032 8.38981 13.9617 6.66931C13.8201 4.94881 13.0248 3.34792 11.7392 2.19581C10.4536 1.04371 8.77541 0.427964 7.04974 0.475184C5.32408 0.522405 3.68209 1.229 2.46141 2.44969C1.24072 3.67037 0.534124 5.31236 0.486903 7.03802C0.439683 8.76369 1.05543 10.4419 2.20753 11.7275C3.35964 13.0131 4.96053 13.8084 6.68103 13.9499C8.40152 14.0915 10.1109 13.5684 11.4576 12.4883L14.2176 15.2483C14.2873 15.3186 14.3702 15.3744 14.4616 15.4125C14.553 15.4506 14.651 15.4702 14.7501 15.4702C14.8491 15.4702 14.9471 15.4506 15.0385 15.4125C15.1299 15.3744 15.2128 15.3186 15.2825 15.2483C15.4177 15.1085 15.4933 14.9216 15.4933 14.7271C15.4933 14.5326 15.4177 14.3457 15.2825 14.2058ZM7.25005 12.4883C6.2117 12.4883 5.19666 12.1804 4.33331 11.6035C3.46995 11.0267 2.79704 10.2067 2.39968 9.24742C2.00232 8.28811 1.89836 7.23251 2.10093 6.21411C2.3035 5.19571 2.80351 4.26025 3.53774 3.52602C4.27197 2.7918 5.20743 2.29178 6.22583 2.08921C7.24423 1.88664 8.29983 1.9906 9.25914 2.38796C10.2185 2.78532 11.0384 3.45823 11.6153 4.32159C12.1921 5.18495 12.5001 6.19998 12.5001 7.23833C12.5001 8.63072 11.9469 9.96608 10.9624 10.9506C9.97779 11.9352 8.64244 12.4883 7.25005 12.4883Z"
                    fill="#434343"
                />
            </svg>
        );
    };

    const crossSVG = () => (
        <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.70497 4.00009L6.85497 1.85509C6.94912 1.76094 7.00202 1.63324 7.00202 1.50009C7.00202 1.36694 6.94912 1.23924 6.85497 1.14509C6.76082 1.05094 6.63312 0.998047 6.49997 0.998047C6.36682 0.998047 6.23912 1.05094 6.14497 1.14509L3.99997 3.29509L1.85497 1.14509C1.76082 1.05094 1.63312 0.998047 1.49997 0.998047C1.36682 0.998047 1.23912 1.05094 1.14497 1.14509C1.05082 1.23924 0.997924 1.36694 0.997924 1.50009C0.997924 1.63324 1.05082 1.76094 1.14497 1.85509L3.29497 4.00009L1.14497 6.14509C1.09811 6.19157 1.06091 6.24687 1.03552 6.3078C1.01014 6.36873 0.99707 6.43409 0.99707 6.50009C0.99707 6.5661 1.01014 6.63145 1.03552 6.69238C1.06091 6.75331 1.09811 6.80861 1.14497 6.85509C1.19145 6.90196 1.24675 6.93915 1.30768 6.96454C1.36861 6.98992 1.43396 7.00299 1.49997 7.00299C1.56598 7.00299 1.63133 6.98992 1.69226 6.96454C1.75319 6.93915 1.80849 6.90196 1.85497 6.85509L3.99997 4.70509L6.14497 6.85509C6.19145 6.90196 6.24675 6.93915 6.30768 6.96454C6.36861 6.98992 6.43396 7.00299 6.49997 7.00299C6.56598 7.00299 6.63133 6.98992 6.69226 6.96454C6.75319 6.93915 6.80849 6.90196 6.85497 6.85509C6.90183 6.80861 6.93903 6.75331 6.96442 6.69238C6.9898 6.63145 7.00287 6.5661 7.00287 6.50009C7.00287 6.43409 6.9898 6.36873 6.96442 6.3078C6.93903 6.24687 6.90183 6.19157 6.85497 6.14509L4.70497 4.00009Z"
                fill="#212224"
            />
        </svg>
    );

    const openChileMenu = (menuItem: IFilterMenu) => {
        setSelectedMenu(menuItem);
    };

    const filterItems = (filteredString: string, isChild: boolean) => {
        const payload: ISearchState = { ...searchState };
        if (isChild) {
            payload.childSearchItem = filteredString.trim().toLowerCase();
        } else {
            payload.parentSearchItem = filteredString.trim().toLowerCase();
        }
        setSearch({ ...payload });
    };

    const searchBar = (isChild = false) => {
        return (
            <>
                <div
                    className={`${isChild ? "filter-w-60" : "w-100"} search-input-group`}
                >
                    <div className="search-input-group-area">
                        <input
                            onChange={(event) => {
                                filterItems(event.target.value, isChild);
                            }}
                            className="search-bar"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className="search-input-group-icon"> {searchSVG()}</div>
                </div>
            </>
        );
    };

    // clearing all filters and selected fields
    const clearFilters = () => {
        listOfFilter.forEach((parentFilter) => {
            parentFilter.isSelected = false;
            if (parentFilter.childFilters && parentFilter.childFilters.length) {
                parentFilter.childFilters.forEach((filter) => {
                    filter.isSelected = false;
                });
            }
        });
        setListOfFilter([...listOfFilter]);
        onResetFilter();
    };

    const getSelectedFilters = () => {
        const appliedFilter: IFilterMenu[] | null = [];
        listOfFilter.forEach((filter) => {
            if (filter.isSelected) {
                appliedFilter.push({
                    ...filter,
                    childFilters:
                        filter.childFilters &&
                        filter.childFilters.filter((filter) => filter.isSelected),
                });
            }
        });

        return appliedFilter;
    };


    const refactorFilterPerTable = (selectedFilters: IFilterMenu[]) => {
        const refactoredFilters: any = selectedFilters.map((filter) => {
            return {
                id: 1,
                columnId: filter.id.toString(),
                columnName: filter.label,               
                type: filter.value,
                children: ((filter && filter.childFilters ? filter.childFilters : [])).map((childFilter) => {
                    return {
                        id: childFilter.id,
                        value: childFilter.label
                    }
                })
            }
        });
        return refactoredFilters;
    }

    const onApply = () => {
        const selectedFilters = getSelectedFilters();
        const refactoredFilters: any = refactorFilterPerTable(selectedFilters)
        onApplyFilter(refactoredFilters);
        setFilterState(!isFilterOpen);
    };

    const filterHeaderLabelContent = () => {
        return (
            <div className="grid-header-container">
                <div className="reset-btn">
                    <button
                        className="filter-common-button filter-common-button--secondary"
                        onClick={() => {
                            clearFilters();
                        }}
                    >
                        {filterResetLabel}
                    </button>
                </div>
                <div className="save-filter">
                    <button
                        className="filter-common-button filter-common-button--primary"
                        onClick={() => {
                            onApply();
                        }}
                    >
                        {filterSubmitLabel}
                    </button>
                </div>
            </div>
        );
    };

    const onMenuSelect = (
        index: number,
        listOfMenu: IFilterMenu[],
        isChild: boolean
    ) => {
        const menu = listOfMenu[index];
        // for child filter updating parent filter as well
        if (isChild) {
            listOfFilter.forEach((filters) => {
                const selectedFilter = filters.childFilters?.find((childFilter) => {
                    return childFilter.id === menu.id && childFilter.label === menu.label;
                });
                if (selectedFilter) {
                    selectedFilter.isSelected = !selectedFilter?.isSelected;
                    const isAnyChildFilterIsActive = filters.childFilters?.find(
                        (filter) => filter.isSelected
                    );
                    if (!isAnyChildFilterIsActive) {
                        filters.isSelected = false;
                    } else {
                        filters.isSelected = true;
                    }
                }
            });
        } else {
            // updating child according to parent
            menu.isSelected = !menu.isSelected;
            if (menu && menu.childFilters && menu.childFilters.length) {
                menu.childFilters.forEach((filter) => {
                    filter.isSelected = menu.isSelected;
                });
            }
        }
        setListOfFilter([...listOfFilter]);
    };

    const listOfMenu = (listOfMenu: IFilterMenu[], isChild = false) => {
        return (
            <div key="menu-listing">
                {listOfMenu.map((menu, menuIndex) => {
                    return (
                        <div
                            key={`menu-item-${isChild ? `child-${menuIndex}` : menuIndex}`}
                        >
                            <div
                                onClick={() => {
                                    if (!isChild) {
                                        openChileMenu(menu);
                                    }
                                }}
                                key={`menu-index-${isChild ? `child-${menuIndex}` : menuIndex}`}
                                className={`${isChild ? `` : " filter-list-container pointer"
                                    } menu-options `}
                            >
                                <div
                                    key={`menu-checkbox-${menuIndex ? `child-${menuIndex}` : menuIndex
                                        }`}
                                    className={`${isChild ? `padding-right-14` : ""
                                        }  filter-checkbox`}
                                >
                                    <input
                                        onChange={() => {
                                            onMenuSelect(menuIndex, listOfMenu, isChild);
                                        }}
                                        className="menu-checkbox pointer"
                                        type="checkbox"
                                        id="scales"
                                        key={`menu-checkbox-input-${menuIndex ? `child-${menuIndex}` : menuIndex
                                            }`}
                                        name="scales"
                                        checked={menu?.isSelected || false}
                                    ></input>
                                </div>
                                <div
                                    className={`${isChild ? "child-menu-text" : "filter-menu-label"
                                        } filter-label mb-2 `}
                                    key={`menu-label-${menuIndex ? `child-${menuIndex}` : menuIndex
                                        }`}
                                >
                                    <div>{menu.label}</div>
                                </div>
                                {!isChild ? (
                                    getSelectedFilter(menu) > 0
                                    &&
                                    <div className="filter-count filter-menu-label mb-2">
                                        <div className="filter-selected-count">
                                            {getSelectedFilter(menu)}
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            {menuIndex !== listOfMenu.length - 1 && !isChild && (
                                <div
                                    className="menu-border"
                                    key={`menu-border-${menuIndex ? `child-${menuIndex}` : menuIndex
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    const getSelectedFilter = (menu: IFilterMenu) => {
        let filterCount = menu.childFilters?.filter((menuInfo) => menuInfo.isSelected).length;
        return filterCount ? ('0' + filterCount).slice(-2) : 0;
    }

    const renderChileMenus = (selectedMenu: IFilterMenu) => {
        return (
            <>
                <div className="child-menu-label">{selectedMenu?.label}</div>
                <div className="child-filter-menu-search">
                    {allowChildSearchBar && searchBar(true)}
                </div>
                <div>
                    {selectedMenu?.childFilters &&
                        listOfMenu(
                            filteredChildList && filteredChildList.length
                                ? filteredChildList
                                : selectedMenu?.childFilters,
                            true
                        )}
                </div>
            </>
        );
    };

    const filterMenusContent = () => {
        return (
            <div className="filter-menu-container">
                <div className="parent-filter-menu">
                    <div className="filter-header-label">{filterHeaderLabel}</div>
                    <div className="parent-filter-menu-search">
                        {allowParentSearchBar && searchBar()}
                    </div>
                    <div className="filter-parent-menu">
                        {listOfMenu(
                            filteredParentList && filteredParentList.length
                                ? filteredParentList
                                : listOfFilter
                        )}
                    </div>
                </div>
                <div className="child-filter-menu">
                    <div className="action-buttons">{filterHeaderLabelContent()}</div>
                    {selectedMenu && selectedMenu.id ? (
                        renderChileMenus(selectedMenu)
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
    };

    const filterContent = () => {
        return (
            <div className="filter-content">
                <div>{filterMenusContent()}</div>
            </div>
        );
    };

    const getParentFilterWithIcon = (filter: IFilterMenu, index: number) => {
        return (
            <div
                className="flex align-item-center"
                key={`filter-parent-container-${index}`}
            >
                <span className="p-2" key={`filter-parent-label-${index}`}>
                    {filter.label}
                </span>
                <div
                    className="p-2 pointer"
                    key={`filter-parent-close-icon-${index}`}
                    onClick={() => {
                        const indexOfFilter = listOfFilter.findIndex((availableFilter) => {
                            return availableFilter.label === filter.label;
                        });
                        onMenuSelect(indexOfFilter, listOfFilter, false);
                        const selectedFilters = getSelectedFilters()
                        const refactoredFilters: any = refactorFilterPerTable(selectedFilters)
                        onFilterChange(refactoredFilters);
                    }}
                >
                    {crossSVG()}
                </div>
            </div>
        );
    };

    const getChildFilterWithIcon = (
        filter: IFilterMenu[],
        filterParent: number
    ) => {
        return filter.map((childItem, childItemIndex) => (
            <div
                className={`${childItemIndex === 0 ? "chips-border pl-5" : ""
                    } flex align-item-center`}
                key={`filter-child-container-${filterParent}-${childItemIndex}`}
            >
                <span
                    className="p-2"
                    key={`filter-child-label-${filterParent}-${childItemIndex}`}
                >
                    {childItem.label}
                </span>
                <div
                    className="p-2 pointer"
                    key={`filter-child-closeIcon-${filterParent}-${childItemIndex}`}
                    onClick={() => {
                        onMenuSelect(childItemIndex, filter, true);
                        const selectedFilters = getSelectedFilters()
                        const refactoredFilters: any = refactorFilterPerTable(selectedFilters)
                        onFilterChange(refactoredFilters);

                    }}
                >
                    {crossSVG()}
                </div>
            </div>
        ));
    };

    const filterListing = () => {
        const availableAndSelectedFilters = getSelectedFilters();
        return availableAndSelectedFilters && availableAndSelectedFilters.length ? (
            <div>
                <div className="flex my-3 flex-wrap">
                    {availableAndSelectedFilters.map((filter, filterParentIndex) => {
                        return (
                            <div
                                className="parent-chips flex"
                                key={`filter-parent-chips-${filterParentIndex}`}
                            >
                                {getParentFilterWithIcon(filter, filterParentIndex)}
                                {filter.childFilters &&
                                    getChildFilterWithIcon(
                                        filter?.childFilters,
                                        filterParentIndex
                                    )}
                            </div>
                        );
                    })}

                    <div
                        className="remove-label align-self-center pointer"
                        onClick={() => {
                            clearFilters();
                        }}
                    >
                        Remove All
                    </div>
                </div>
            </div>
        ) : (
            <></>
        );
    };

    return (
        <>
            <div>
                <span
                //   onClick={() => {
                //       // setFilterState(!filterState);
                //   }}
                >
                    {label}
                </span>
            </div>
            {/* filter listing with chips */}
            {/* {filterListing()} */}
            {/* filter list content  */}
            {filterState && filterContent()}
        </>
    );
};
