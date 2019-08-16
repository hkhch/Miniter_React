import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MainMenu.css';


class MainMenu extends Component {
  constructor(props) {
    // 부호객체 생성자 호출
    super(props);

    // 생성자 호출 상태 확인
    console.log('constructor');
  }

  // 랜더링 함수 
  render() {
    console.log('render');

    return (
      // Main Menu 그리기
      <div id="MENU_WRAP"> 
        <div className="MENU_TITLE"> MINITER MENU</div>
        <div className="CENTER_ALIGN"><Link to="/login">LOG IN</Link></div>
        <div className="CENTER_ALIGN"><Link to="/signup">SIGN UP</Link></div>
        <div className="CENTER_ALIGN"><Link to="/tweets">MINITER</Link></div>
      </div>
    );
  }
}

// 외부에서 사용할 수 있도록 Export시킴
export default MainMenu;
