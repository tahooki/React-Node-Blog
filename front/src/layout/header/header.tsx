import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  public render() {
    return (
      <div className="header">
        <div>
          <p><Link to="/">홈</Link></p>
          <p><Link to="/Posts">포스트</Link></p>
          <p><Link to="/login">로그인</Link></p>
        </div>
      </div>
    );
  }
}

export default Header;
