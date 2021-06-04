import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setDateFilters } from '../actions/filters'

function ExpenseListFilters(props) {
    function onTextChange(e) {
        props.setTextFilter(e.target.value)
    }

    function onSelectChange(e) {
        switch(e.target.value) {
            case 'createdAt':
                props.sortByDate()
                return;
            case 'amount':
                props.sortByAmount()
                return;
        }
    }

    function onStartDateChange(e) {
        const startDate = new Date(e.target.value).getTime()

        setStartDate(startDate)
        props.setDateFilters(startDate, endDate)
    }

    function onEndDateChange(e) {
        const endDate = new Date(e.target.value).getTime()

        setEndDate(endDate)
        props.setDateFilters(startDate, endDate)
    }

    const [startDate, setStartDate] = useState(new Date("1/1/" + new Date().getFullYear()))
    const [endDate, setEndDate] = useState(new Date("12/31/" + new Date().getFullYear()))

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input className="input" type="text" defaultValue={props.filters.text} onChange={onTextChange} placeholder="Search expenses"></input>
                </div>
                <div className="input-group__item">
                    <select className="select" defaultValue={props.filters.sortBy} onChange={onSelectChange}>
                    <option value="createdAt">Date</option>
                    <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <input className="input" type="date" name="startDate" onChange={onStartDateChange}></input>
                    <input className="input" type="date" name="endDate" onChange={onEndDateChange}></input>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setDateFilters: (startDate, endDate) => dispatch(setDateFilters(startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);