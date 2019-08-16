import React, { Component } from 'react';
import './Tweets.css';
import { Link } from 'react-router-dom'


class Tweets extends Component {
    /* 선언 / 정의되는 시점에 할당됨
    state = {
        ID: "",
        Name: "",
        Password: "",
        RePassword: "",
        Profile: "",

        twitterText: "",
    };
    */

  constructor(props) {
    // 부호객체 생성자 호출
    super(props);

    // 맴버변수 정의
    this.state = {
      tweets: [],
      twitterText: "",
    };

    // 생성자 호출 상태 확인
    console.log('constructor');
  }

  // 자신의 객체에서 발생되는 이벤트 함수
  onSignUpClick = (e) => {
    console.log("[ SIGNUP CLICK ]", e.target.value);
    alert(`SIGN UP 버튼이 눌렸습니다. \n    ID:${this.state.ID}             \
                                  \n    NAME:${this.state.Name}         \
                                  \n    PW:${this.state.Password}       \
                                  \n    RePW:${this.state.RePassword}   \
                                  \n    Profile:${this.state.Profile}`);
  }

  // 자식 객체에서 이벤트가 발생되었을때 호출되는 Callback함수
  onChangeDataForParents = (id, dataFromChild) => {
    // 자식 컴포넌트에서 받은 값을 이용한 로직 처리
    // ID관련 데이터
    switch(id){
    case "0": 
        this.setState({ID: dataFromChild});
        break;
    case "1":
        this.setState({Name: dataFromChild});
        break;
    case "2":
        this.setState({Password: dataFromChild});        
        break;
    case "3":
        this.setState({RePassword: dataFromChild});        
        break;
    case "4":
        this.setState({Profile: dataFromChild});
        break;
    default:
        break;
    }
  }

  handleChange = (e)=>{
    this.setState({
        twitterText: e.target.value
    });
  }

  addTweet = ()=>{
    // 트윗 추가
    {/*
        // 0. setState()가 호출되지 않으므로 의미없음
        // this.state.twitters.push(this.state.twitterText);
        console.log("push전", .push(this.state.twitterText);
        this.state.twitters.push(this.state.twitterText);
        this.setState({
        tweets: this.state.twitters
        })
        console.log("push후", .push({
        text: this.state.twitterText,
        date: new Date()});
    */}


      console.log("push전", this.state.tweets);
      this.state.tweets.unshift(this.state.twitterText);
      this.setState({
          tweets: this.state.tweets,
      });
      console.log("push후", this.state.tweets);

  }

  // 랜더링 함수 
  render() {
    console.log('Tweets Render', this.state.tweets);

    {/* 
        // 배열의 map()함수를 사용하면 쉽게 접근할 수 있음
        // Rendering tweets구성
        let tweetJSX = [];
        let state = this.state;             // 찾는 로직이 포함되기 때문에 속도에 영향을 줌
        let tweets = this.state.tweets;
        let { tweets,
            twitterText } = this.state;   // Destructuring(디스트럭쳐링)
        
        for(let index=0; i<tweets.length; index++){
            tweetJSX.push(<li>{tweets[index]</li>);
        }
    */}

    let {
        tweets,
        twitterText
      } = this.state;
  

    // 다시 그려야 할 때마다 불려지는 함수 (변경된 사항이 있을때마다 호출됨)
    // 아마도 VIRTUAL DOM을 내부적으로 호출하는 것 같음 (확인필요)
    return (
        <div className="MINITOR">
            {/* 0. USER INFORMATION 영역 */}
            <div className="USER_AREA">
                <div className="TOP"></div>
                <div className="LOGIN_USER"><p>USER ID</p></div>    {/* LOG IN USER */}
                <div className="TWEETS_TITLE"><p>TWEETS</p></div>   {/* TITLE */}
                <div className="TWEETS_CNT"><p>0</p></div>          {/* 전체 TWEETS 수 */}
            </div>

            {/* 1. CONTENTS INSERT 영역 */}
            <div className="INSERT_AREA">
                <div><select className="SIGNUP_USER_LIST"></select></div>                                   {/* SIGN UP USER */}
                <div><textarea className="TWEETS_INPUT" onChange={this.handleChange}></textarea></div>           {/* TWEETS INPUT */}
                <div><button className="TWEETS_BUTTON" onClick={this.addTweet}>TWEETS 등록</button></div>    {/* TWEETS BUTTON */}
            </div>

            {/* 2. VIEW COMMAND 영역 */}
            <div className="CMD_AREA">
                <div className="CMD_BUTTON_WRAP">
                    <button className="VIEW_BUTTON">전체보기</button>       {/* VIEW BUTTON */}
                    <Link className="RETURN_BUTTON" to="/">메뉴화면</Link> {/* RETURN BUTTON */}
                    {/*<button className="RETURN_BUTTON">메뉴화면</button>*/}
                </div>
            </div>    

            {/* 3. CONTENTS 영역 */}
            <div className="CONTENTS_AREA">
                {/* JAVASCRIPT로 동적으로 생성되는 ELEMENT */}
                {
                    tweets.map((el, idx) => (
                                                <div key={idx}>
                                                    <p>{el}</p>
                                                </div>
                                            ))
                }
            </div>
        </div>
    );
  }
}


// 외부에서 사용할 수 있도록 Export시킴
export default Tweets;

{/*
<div className="App">
    <textarea
        value={twitterText}
        onChange={this.handleChange}
    />

    <div
        onClick={this.addTweet}
    >
        트윗!!
    </div>

    <ul>
    {
        tweets.map((el, idx) => (
        <li key={idx}>
            <span>{el}</span>
            <p>{el.text}</p>
        </li>
        ))
    }
    </ul>

</div>
*/}