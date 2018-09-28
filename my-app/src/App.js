import React from 'react';
import logo from './logo1.png';
import './App.css';
import { Button, Container, Row, Col,
   InputGroup, InputGroupAddon, InputGroupText, Input,
   Form, FormGroup, Label, FormText,CardTitle,CardText,
   TabContent, TabPane, Nav, NavItem, NavLink, Card }
      from 'reactstrap';
import classnames from 'classnames';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
      activeTab:'1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Create Job Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              View Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <Form>
              <FormGroup>

              </FormGroup>
              <FormGroup>
                <Label>Full Name</Label>
                <Input type="text" name="fullname" id="exampleFullname"
                  placeholder="Enter your full name here"/>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="exampleEmail"
                  placeholder="example@example.com" />
              </FormGroup>
            </Form>
            </TabPane>
          </TabContent>
        </Container>
        </p>
      </div>
    );
  }
}

export default App;
