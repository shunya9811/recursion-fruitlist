// ここから書きましょう
function Fruit({fruit}){
    return (
        <div className="card">
            <div className="img" src="${fruit.image}"></div>
            <div className="card-textbox">
                <h2>
                    {fruit.name}
                </h2>
                <p>
                    Calorie: {fruit.calorie} kcol / 100g
                </p>
                <p>
                    Macro: P {fruit.macro.p}g F {fruit.macro.f}g C {fruit.macro.c}g
                </p>
            </div>
        </div>
    )
}

function App(){
    const fruitList = [
        {
            image: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_960_720.jpg",
            name: 'Orange',
            calorie: 46,
            macro: {
                p: 11.8,
                f: 0.1,
                c: 0.9
            }
        },
        {
            image: './images/apple.jpg',
            name: 'Apple',
            calorie: 57,
            macro: {
                p: 15.5,
                f: 0.2,
                c: 0.1
            }
        },
        {
            image: './images/kiwi.jpg',
            name: 'Kiwi fruit',
            calorie: 53,
            macro: {
                p: 13.5,
                f: 0.1,
                c: 1.0
            }
        },
        {
            image: './images/peach.jpg',
            name: 'Peach',
            calorie: 40,
            macro: {
                p: 10.2,
                f: 0.1,
                c: 0.6
            }
        },
    ]

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Fruit List</h1>
            <hr width="30%" align="center"></hr>
            <div style={{
                flex: 1,
                
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                {fruitList.map((fruit) => 
                    <Fruit
                        fruit={fruit}
                        key={fruit.name}
                    />
                )}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);