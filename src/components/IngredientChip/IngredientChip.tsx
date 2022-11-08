import { Chip } from '@material-ui/core';
import React from 'react';

type Props = {
    ingredient: string
}

function IngredientChip({ ingredient }: Props) {
    return (
        <Chip label={ingredient} />
    )
}

export default IngredientChip;