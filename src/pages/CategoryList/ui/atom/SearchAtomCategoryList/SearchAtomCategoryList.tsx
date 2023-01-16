import { Input } from '@shared/ui/Input';
import React from 'react';

type Props = {
    input: string
    setInputChange: (value: string) => void
    showHeader: () => void
    hiddenHeader: () => void
}

const SearchAtomCategoryList = ({
    hiddenHeader,
    input,
    setInputChange,
    showHeader
}: Props) => {
    return (
        <Input
            placeholder='Поиск'
            value={input}
            onChange={setInputChange}
            onBlur={showHeader}
            onFocus={hiddenHeader}
        />
    )
}

export default SearchAtomCategoryList