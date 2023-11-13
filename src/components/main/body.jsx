import Top from './top'
import Bottom from './bottom'
// import Auth from './auth/auth';

export default function Body( {navExpanded, setNavExpanded} ) {
  return (
    <div className="home-body">
        {/* <Auth /> */}
        <Top 
          navExpanded={navExpanded} 
          setNavExpanded={setNavExpanded} 
        />
        <Bottom />
    </div>
  )
}
