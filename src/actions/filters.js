
//setText filter
export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

//sort by amount 
export const sortByAmount = () => ({
    type : "SORT_BY_AMOUNT"
});

//sort by date 
export const sortByDate = () => ({
    type : "SORT_BY_DATE"
});

//start date
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate 
});

//end date
export const setEndDate = (endDate) => ({
    type : "SET_END_DATE",
    endDate
});