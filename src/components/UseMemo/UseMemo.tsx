import React, {useCallback, useMemo, useState} from 'react'

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(6)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
   /* console.log('USERS SECRET')*/
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpsReactMemoExample = () => {
   /* console.log('HelpsReactMemoExample')*/
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Katya', 'Artem', 'Valera']);

    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a') > -1)
    },[users])

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getDate()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JavaScript', 'CSS', 'Redux']);

    const memorisedAddBook = useMemo(()=>{
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular' + ' ' + new Date().getDate()]
            setBooks(newBook)
        }
    }, [books])

    const memorisedAddBook2 = useCallback(() => {
            console.log(books)
            const newBook = [...books, 'Angular' + ' ' + new Date().getDate()]
            setBooks(newBook)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book /*books={books} */ addBook={memorisedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
   /* books: Array<string>,*/
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
     console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
}
const Book = React.memo(BooksSecret)