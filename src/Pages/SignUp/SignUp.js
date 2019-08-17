import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SmartInput from '../../Components/smartInput/smartInput.js'
import './SignUp.css';


class SignUp extends Component {
constructor(props) {
// 부호객체 생성자 호출
    super(props);

    // 맴버변수 정의
    this.state = {
      ID: "",
      Name: "",
      Password: "",
      RePassword: "",
      Profile: "",
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
  onChangeDataForParents = (/*id, dataFromChild*/e) => {
    // 자식 컴포넌트에서 받은 값을 이용한 로직 처리
    // ID관련 데이터
    /*
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
    */

    // Dynamic Property Key
    this.setState({
        [e.target.name]: e.target.value,
    });

  }

  // 랜더링 함수 
  render() {
    console.log('render');

    // 다시 그려야 할 때마다 불려지는 함수 (변경된 사항이 있을때마다 호출됨)
    // 아마도 VIRTUAL DOM을 내부적으로 호출하는 것 같음 (확인필요)
    return (
        <div className="SIGNUP_WRAP">
            <div id="TITLE_CONTAINER">
                <div className="TITLE">Sign up to Miniter</div>
            </div>

            <div id="SIGNUP_INPUT_CONTAINER">
                {/* 사용자 정의 컴포넌트 생성부분 */}
                <SmartInput className="SMART_INPUT" name="ID" id="0" inputType="text" 
                            placeholder="Enter ID" onChangeDataForParents={this.onChangeDataForParents}></SmartInput>
                <SmartInput className="SMART_INPUT" name="Name" id="1" inputType="text" 
                            placeholder="Enter Name" onChangeDataForParents={this.onChangeDataForParents}></SmartInput>
                <SmartInput className="SMART_INPUT" name="Password" id="2" inputType="password" 
                            placeholder="Password" onChangeDataForParents={this.onChangeDataForParents}></SmartInput>
                <SmartInput className="SMART_INPUT" name="RePassword" id="3" inputType="password" 
                            placeholder="Password" onChangeDataForParents={this.onChangeDataForParents}></SmartInput>
                <SmartInput className="SMART_INPUT" name="Profile" id="4" inputType="text" 
                            placeholder="Profile" onChangeDataForParents={this.onChangeDataForParents}></SmartInput>
            </div>                        

            <div 
                id="BUTTON_CONTAINER"
            >
                <button id="SIGNUP_COMPLETE" onClick={this.onSignUpClick}>SIGN UP</button>
                <button id="SIGNUP_DELETE">DELETE</button>
                <Link id="SIGNUP_CANCEL" to="/">CANCEL</Link>
            </div>
        </div>
    );
  }
}


// 외부에서 사용할 수 있도록 Export시킴
export default SignUp;
