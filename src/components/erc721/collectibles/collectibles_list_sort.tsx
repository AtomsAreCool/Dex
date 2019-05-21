import React from 'react';

import { CollectibleSortType } from '../../../util/sortable_collectibles';

interface Props {
    currentValue: CollectibleSortType;
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const options: CollectibleSortType[] = [
    CollectibleSortType.NewestAdded,
    CollectibleSortType.PriceLowToHigh,
    CollectibleSortType.PriceHighToLow,
];

export const CollectiblesListSort = (props: Props) => {
    const { currentValue, onChange } = props;
    return (
        <div>
            {options.map(option => (
                <label key={option}>
                    <input type="radio" value={option} checked={currentValue === option} onChange={onChange} />
                    {option}
                </label>
            ))}
        </div>
    );
};
