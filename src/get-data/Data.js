import { useEffect, useState } from "react";

const Data = () => {
    const [review, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [review, setReviews]
};

export default Data; 