import React from 'react'
import styled from 'styled-components'

const Checkbox_wrap = styled.div`
`
const Front_form_checkbox = styled.input`
    margin-right: 23px;
    &:not(:checked),
    &:checked {
         position: absolute;
         left: -9999px;
    }
    &:not(:checked) + label,
    &:checked + label {
         position: relative;
         padding-left: 1.95em;
         cursor: pointer;
    }
    &:not(:checked) + label:before,
    &:checked + label:before {
         content: '';
         position: absolute;
         left: 0;
         top: 2px;
         width: 20px;
         height: 20px;
         border: none;
         background: #fff;
         border-radius: 5px;
         box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
    }
    &:not(:checked) + label:after,
    &:checked + label:after {
         content: '\\2713\\0020';
         position: absolute;
         top: 5px;
         left: 4px;
         font-size: 18px;
         line-height: 0.8;
         color: #161616;
         transition: all .2s;
         font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
    }
    &:not(:checked) + label:after {
         opacity: 0;
         transform: scale(0);
    }
    &:checked + label:after {
         opacity: 1;
         transform: scale(1);
    }
`


const Checkbox = () => {
    return (
        <Front_form_checkbox
            checked="false"
            onChange
            type="checkbox"
            id="form_checkbox"
            value=""
            name="form-checkbox"
        />
    )
}

export default Checkbox;