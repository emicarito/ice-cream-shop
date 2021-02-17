import React from 'react';
import './styles.css';

export default function ListComponent({ data }) {
    return <ul>
        {data.map((item) =>
            <li key={item.id}>{item.name}</li>
        )}
    </ul>
}