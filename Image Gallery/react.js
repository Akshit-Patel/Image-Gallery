
class ShowData extends React.Component{
 constructor(props){
     super(props); 
     this.state = {
        isLoggedIn : true
     }

    }

    render(){
        let toShow =  <div className="jumbotron">
        <h1><i className="fas fa-camera-retro"></i> Image Gallery</h1>
        <p>Please login with your google Id to view pictures</p>
        </div>;
        if(this.state.isLoggedIn == true){
        toShow = <React.Fragment>
        <div className="jumbotron">
        <h1><i className="fas fa-camera-retro"></i> Image Gallery</h1>
        <p>You Will Find Beautiful Images Here Surely not clicked by me</p>
        </div>
        <div className="row">        
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8e3bc7d37546268c95f0885ea821717&auto=format&fit=crop&w=1650&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-0.3.5&s=3e748d1ca0fb137df28bd5ab74250e07&auto=format&fit=crop&w=1140&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&s=7949722a90a50c06b49fed9f670114a5&auto=format&fit=crop&w=1050&q=80"}/></div></div>
        </div>	
        <div className="row">
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-0.3.5&s=2fd4e1abb9770bd689d2014e0d265ade&auto=format&fit=crop&w=1050&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-0.3.5&s=bceffd8bfff0b56d3de82e4e59528a60&auto=format&fit=crop&w=1156&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1506268919522-a927511962a9?ixlib=rb-0.3.5&s=c7501c98390ecec95f8d1a1b90578011&auto=format&fit=crop&w=1049&q=80"}/></div></div>
        </div>
        <div className="row">
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7370291be692fe7e9662ee2d6fd277af&auto=format&fit=crop&w=1047&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-0.3.5&s=22f5aa4a1772048959276ea370e1c237&auto=format&fit=crop&w=1051&q=80"}/></div></div>
        <div className="col-md-4 col-sm-6"><div className="thumbnail"><img src={"https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&s=5d152b5419129ffb86b70a851d18478e&auto=format&fit=crop&w=1050&q=80"}/></div></div>
        </div> 
        </React.Fragment>;
        }
        return(
        <React.Fragment>
        {toShow}
        </React.Fragment>
        
         

    );    
}
}
ReactDOM.render(<ShowData/>, document.getElementsByClassName("container")[1]);
  