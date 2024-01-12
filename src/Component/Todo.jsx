import React, { useEffect, useState } from 'react'

const localData =()=>{
    const data = localStorage.getItem('value')
    if(data){
        return JSON.parse(localStorage.getItem('value'))
    }else{
        return []
    }
}

const Todo = () => {
    const [list, setList] = useState('')
    const [item, setItem] = useState(localData())

    const addTodo = () => {
       if(!list){
        alert("plese enter text")
       }else{
        setItem([...item , list])
        setList('')
       }
    }
    const deleteList =(id)=>{
        console.log(id) 
        const deleteItem = item.filter((elem , index)=>{
            return index != id
        })
        setItem(deleteItem)
    }
        const deleteAll = ()=>{
            setItem([])
        }
        useEffect(()=>{
            localStorage.setItem('value', JSON.stringify(item))
        },[item])
 
    return (
        <div className='container'>
            <div>
                <h1>TODO LIST</h1>
            </div>
            <div className='text'>
                <input type="text" placeholder='Enter text' className='inputs' value={list} onChange={(e) => setList(e.target.value)} />
                <button className='add' onClick={addTodo}>Add</button>
            </div>
            <div>
                {item.map((val, index) => {
                    return (
                        <div className='list' key={index}>
                            <h3 className='data'>{val}</h3>
                            <button className='delete' onClick={()=>deleteList(index)}>delt</button>
                            <button className='edit'>Edit</button>
                        </div>
                    )})}
            </div>
            <div>
                <button onClick={deleteAll}>Delete List</button>
            </div>
        </div>
    )
}

export default Todo