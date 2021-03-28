import React from 'react'
import './FormItem.css'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import { FormControl } from '@material-ui/core'
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

export const FormInput = ({ name, fieldName, onChange, value }) => {
    return (
        <FormControl variant="outlined" className="form-item">
            <InputLabel htmlFor="component-outlined">{fieldName}</InputLabel>
            <OutlinedInput name={name} onChange={(e) => onChange(e)} id="component-outlined" label={fieldName} value={value}/>
        </FormControl>
    )
}

export const FormRadio = ({ name, fieldName, onChange, value, onClick }) => {
    return (
        <FormControl className="form-item" component="fieldset">
            <FormLabel component="legend">{fieldName}</FormLabel>
            <RadioGroup aria-label={fieldName} name={name} value={value[0]} onChange={e => onChange(e)}>
                <FormControlLabel value={true} control={<Radio onClick={(e) => onClick(e)} />} label="Yes" />
                <FormControlLabel value={false} control={<Radio onClick={(e) => onClick(e)} />} label="No" />
            </RadioGroup>
        </FormControl>
    )
}

export const FormCheckbox = ({ data, updateCheck, description }) => {
    return (
        <FormControl className="form-item" component="fieldset" >
            <FormLabel component="legend">{description}</FormLabel>
            <FormGroup>
                {data.map(({name, value, label}, idx) => (
                    <FormControlLabel
                        key={idx}
                        control={
                            <Checkbox 
                                checked={value} 
                                onChange={(e) => updateCheck(e)} 
                                name={name} 
                            />
                        }
                        label={label}
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
}

export const FormRadioMultiple = ({ name, fieldName, onChange, value, options, onClick }) => {
    return (
        <FormControl className="form-item" component="fieldset">
            <FormLabel component="legend">{fieldName}</FormLabel>
            <RadioGroup aria-label={fieldName} name={name} value={value} onChange={e => onChange(e)}>
                {options.map(({ value, label }, idx) => (
                    <FormControlLabel key={idx} value={parseInt(value)} control={<Radio onClick={(e) => onClick(e)}  />} label={label} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export const FormSelect = ({ name, fieldName, onChange, value, options }) => {
    return (
        <FormControl className="form-item">
            <FormLabel>{fieldName}</FormLabel>
            <Select name={name} value={value} onChange={e => onChange(e)}>
                {options.map((value, idx) => (
                    <MenuItem value={value} key={idx}>{value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}