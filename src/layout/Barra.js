import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
        <li>
          <Link to='/'>
          Menu 1
          </Link>

        </li>

        <li>
        <Link to='/Menutwo'>
          Menu 2
        </Link>
          
        </li>

        <li>
        <Link to='/Menuthree'>
          Menu 3
        </Link>
          
        </li>
      </ul>

      <section>
        <Outlet/>
      </section>
      </div>
    );
  }
  
  export default Barra;