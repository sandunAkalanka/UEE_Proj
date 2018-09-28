import React from 'react';
import logo from './logo1.png';
import './App.css';
import { Button, Container, Row, Col,
   InputGroup, InputGroupAddon, InputGroupText, Input,
   Form, FormGroup, Label, FormText,CardTitle,CardText,
   TabContent, TabPane, Nav, NavItem, NavLink, Card,
   Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
   CardBody, CardSubtitle, AppRegistry, View, ButtonGroup }
      from 'reactstrap';
import classnames from 'classnames';
import DropdownReact from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua & Barbuda',
  'Argentina','Armenia','Australia','Austria','Azerbaijan'
];
const defaultOption = options[0];



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
          <img src={logo} className="App-logo" alt="logo"  margin-left="0" style={{width: 200,height: 160}}/>
          /*<h1 className="App-title"></h1>*/
        </header>
        <Container style={{maxwidth:100 , backgroundColor: ''}}>

        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              Create Job Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              View Profile
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" style={{flex: 1, backgroundColor: ''}}>
          <Form style={{flex: 2, backgroundColor: ''}}>
              <FormGroup style={{flex: 2, backgroundColor: ''}}>

              </FormGroup>

              <FormGroup style={{flex: 2, backgroundColor: ''}}>
                <Label for="createjobFullname">Full Name</Label>
                <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                <Input type="text" name="fullname" id="createjobFullname"
                  placeholder="Enter your full name here" />
              </FormGroup>
              <FormGroup style={{flex: 2, backgroundColor: ''}}>
                <Label for="createjobEmail">Email</Label>
                <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                <Input type="email" name="email" id="createjobEmail"
                  placeholder="example@example.com" />
              </FormGroup>
              <FormGroup style={{flex: 2, backgroundColor: ''}}>
                <Card outline color="secondary">
                  <CardBody >
                    <FormGroup row >
                      <Label for="createjobHouseNo" sm={2}>House No:</Label>
                      <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                      <Col >
                        <Input name="houseNo" id="createjobHouseNo"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobStreet" sm={2}>Street:</Label>
                      <Col >
                        <Input name="street" id="createjobStreet"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobCity" sm={2}>City:</Label>
                      <Col >
                        <Input name="city" id="createjobCity"
                          placeholder="" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobCountry" sm={2}>Country:</Label>
                      <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                      <Col >
                        <DropdownReact options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
                      </Col>
                    </FormGroup>
                    <FormGroup row >
                      <Label for="createjobPostalCode" sm={2}>Postal Code:</Label>
                      <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                      <Col >
                        <Input name="postalcode" id="createjobPostalCode" placeholder="" />
                      </Col>
                    </FormGroup>
                  </CardBody>
                </Card>
              </FormGroup>
              <FormGroup style={{flex: 2, backgroundColor: ''}}>
                <FormGroup row>
                  <Label for="createjobPhone1">Phone 1</Label>
                  <Label for="createjobAsterisk" style={{color: '#CE0A13'}}> * </Label>
                  <Input type="phone" name="phone" id="createjobPhone1"
                    placeholder="123456789" />
                </FormGroup>
                <FormGroup row>
                  <Button style={{backgroundColor: '#2A9DA8'}}>Add More</Button>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Card outline color="secondary">
                  <CardBody>

                    <Card outline color="secondary">
                      <CardBody>
                      <CardTitle>Hardware</CardTitle>
                      <FormGroup >
                        <FormGroup check>
                          <Col>
                            <Input type="checkbox" />{''}
                              Laptops
                          </Col>
                          <Col>
                            <Input type="checkbox" />{''}
                              Desktops
                          </Col>
                          <Col>
                            <Input type="checkbox" />{''}
                              Tablets
                          </Col>
                          <Col>
                            <Input type="checkbox" />{''}
                              Accessories
                          </Col>
                        </FormGroup>
                      </FormGroup>

                        <FormGroup >
                          <Button style={{backgroundColor: '#2A9DA8'}}>Add More</Button>
                        </FormGroup>
                      </CardBody>
                    </Card>
                    <Card outline color="secondary">
                      <CardBody>
                      <CardTitle>Software</CardTitle>
                      <FormGroup >
                        <FormGroup check>
                          <Col>
                            <Input type="checkbox" />{''}
                              Windows
                          </Col>
                          <Col>
                            <Input type="checkbox" />{''}
                              Linux
                          </Col>
                          <Col>
                            <Input type="checkbox" />{''}
                              McIntosh
                          </Col>
                        </FormGroup>
                      </FormGroup>
                        <FormGroup >
                          <Button style={{backgroundColor: '#2A9DA8'}}>Add More</Button>
                        </FormGroup>
                      </CardBody>
                    </Card>
                    <Card outline color="secondary">
                      <CardBody>
                        <CardTitle>Other</CardTitle>
                        <FormGroup >
                          <Button style={{backgroundColor: '#2A9DA8'}}>Add More</Button>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </CardBody>
                </Card>
              </FormGroup>
              <ButtonGroup size="lg">
                <Button style={{backgroundColor: '#0D94ED',paddingRight: 20}}>Reset</Button>
                <Button style={{backgroundColor: '#ED0D18'}}>Cancel</Button>
                <Button style={{backgroundColor: '#49ED0D'}}>Save</Button>
              </ButtonGroup>

            </Form>
            </TabPane>
            <TabPane tabId="2">
            </TabPane>
          </TabContent>

        </Container>
      </div>
    );
  }
}

export default App;
