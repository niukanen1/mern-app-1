import {useState, useEffect} from 'react'; 
export default function ResultList() { 
    const [list, setlist] = useState([{
        firstName: '',
        lastName: '', 
        voteFor: '', 
    }]);
    useEffect(() => {
        fetch("/userlist/").then(res => { 
            if (res.ok) return res.json()
        }).then(resJson => { 
            setlist(resJson)
        })
    }, [])
    return ( 
        <div>
            {list.map((data, key) => { 
                return ( 
                    <div key={key}>
                        <p>{data.firstName} {data.lastName} {data.voteFor}</p>
                    </div>
                )
            })}
        </div>
    )
}