import React from 'react';
import './styles.css';

export default function FilterComponent({ data, handleFilterChange }) {
    return (
        <>
            {data.map((item) =>
                <label key={item}>
                    <input
                        name={item}
                        type="checkbox"
                        value={item}
                        onChange={handleFilterChange}
                    />{" "}
                    {item}
                </label>
            )
            }
        </>)
}