import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



type Props = {
    onSubmit: Function;
    clearAll: Function;
    classNames: {
        container?: string;
        textField?: string;
        buttonContainer?: string;
        submitButton?: string;
        clearButton?: string;
    };
};

function SearchBar({ onSubmit, clearAll, classNames }: Props) {
    const [textValue, setTextValue] = useState<string>('');
    const onTextChange = (e: any) => setTextValue(e.target.value);

    const submitText = () => {
        onSubmit(textValue);
        setTextValue('');
    };

    return (
        <div className={classNames.container}>
            <TextField onKeyDown={(e) => { if(e.code == 'Enter') submitText() }} className={classNames.textField} id="outlined-basic" label="Ingredient" variant="outlined" onChange={onTextChange} value={textValue} />
            <div className={classNames.buttonContainer}>
                <Button className={classNames.submitButton} onClick={() => submitText()} variant='contained' color="primary">Add</Button>
                <Button className={classNames.clearButton} onClick={() => clearAll()} variant='outlined' color="secondary">Clear All</Button>
            </div>
        </div>
    )
}

export default SearchBar;