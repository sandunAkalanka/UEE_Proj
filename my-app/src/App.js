import React from 'react';
import logo from './logo1.png';
import './App.css';
import { Button, Container, Row, Col,
   InputGroup, InputGroupAddon, InputGroupText, Input,
   Form, FormGroup, Label, FormText,CardTitle,CardText,
   TabContent, TabPane, Nav, NavItem, NavLink, Card,
   Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
   CardBody, CardSubtitle }
      from 'reactstrap';
import classnames from 'classnames';
import DropdownReact from 'react-dropdown';
import 'react-dropdown/style.css';
const defaultOption = options[0];
const options = [
  'one', 'two', 'three'
];


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
      activeTab:'1',
      dropdownOpen:false
    };
  }
  toggle(tab)
  {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    /*
    this.setState(prevState =>({
      dropdownOpen:!prevState.dropdownOpen
    }));
    */
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
                <Label for="createjobFullname">Full Name</Label>
                <Input type="text" name="fullname" id="createjobFullname"
                  placeholder="Enter your full name here"/>
              </FormGroup>
              <FormGroup>
                <Label for="createjobEmail">Email</Label>
                <Input type="email" name="email" id="createjobEmail"
                  placeholder="example@example.com" />
              </FormGroup>
              <FormGroup>
                <Card outline color="secondary">
                  <CardBody >
                    <FormGroup row >
                      <Label for="createjobHouseNo" sm={2}>House No:</Label>
                      <Col sm={10}>
                        <Input name="houseNo" id="createjobHouseNo"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobStreet" sm={2}>Street:</Label>
                      <Col sm={10}>
                        <Input name="street" id="createjobStreet"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobCity" sm={2}>City:</Label>
                      <Col sm={10}>
                        <Input name="city" id="createjobCity"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobCountry" sm={2}>Country:</Label>
                      <Col sm={10}>
                        <UncontrolledDropdown>
                          <DropdownToggle caret>
                            Select Your Country
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Afghanistan</DropdownItem>
                            <DropdownItem>Albania</DropdownItem>
                            <DropdownItem>Algeria</DropdownItem>
                            <DropdownItem>Andorra</DropdownItem>
                            <DropdownItem>Angola</DropdownItem>
                            <DropdownItem>Anguilla</DropdownItem>
                            <DropdownItem>Antigua & Barbuda</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                    <DropdownReact options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
                    </FormGroup>
                  </CardBody>
                </Card>
              </FormGroup>
            </Form>
            </TabPane>
            <TabPane tabId="2">
            </TabPane>
          </TabContent>

        </Container>
        </p>
      </div>
    );
  }
}

export default App;
