import * as routes from '../constants/routes';

const Home = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">{routes.STATE_TODO.name}</div>
                    <div className="card-body">todo list功能 (寫在 state中)</div>
                    <div className="card-footer text-right">2022/02/06</div>
                </div>
            </div>
        </div>
    );
};

export default Home;