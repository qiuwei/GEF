'use strict';

import React, {PropTypes} from 'react';
import ReactDOMServer from 'react-dom/server';
import DropzoneComponent from 'react-dropzone-component';
import {Row, Col, Button, Glyphicon} from 'react-bootstrap'
import axios from 'axios';
import bows from 'bows';

require('react-dropzone-component/styles/filepicker.css');
require('dropzone/dist/min/dropzone.min.css');



const log = bows('Files');

class Files extends React.Component {
    constructor(props) {
        super(props);

        this.djsConfig = {
            addRemoveLinks: true,
            autoProcessQueue: false,
            uploadMultiple: true,
            previewTemplate: ReactDOMServer.renderToStaticMarkup(
                <div className="dz-preview dz-file-preview">
                    <div className="dz-filename"><span data-dz-name="true"></span></div>
                    <img data-dz-thumbnail="true" />
                    {/*<div className="dz-details">*/}
                    {/*</div>*/}
                    <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
                    <div className="dz-success-mark"><span>✔</span></div>
                    <div className="dz-error-mark"><span>✘</span></div>
                    <div className="dz-error-message"><span data-dz-errormessage="true"></span></div>
                </div>
            )
        };

        this.state = {myDropzone: undefined};
        this.fileUploadSuccess = this.props.fileUploadSuccess.bind(this);
        this.fileUploadError = this.props.fileUploadError.bind(this);
    }

    componentWillMount() {
    }

    render() {
        const getApiURL = this.props.getApiURL;
        const buttonText = this.props.buttonText;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            init: (passedDropZone) => {
                this.setState({myDropzone: passedDropZone});
            },

            successmultiple: (files, response) => {
                log('successmultiple, response is: ', response);
                this.fileUploadSuccess(response);
            },

            error: (files, errorMessage) => {
                this.fileUploadError(errorMessage);
            }
        };

        const fileUploadStart = this.props.fileUploadStart.bind(this);

        const submitHandler = ()  => {
            fileUploadStart();
            this.state.myDropzone.processQueue();
        };


        if(getApiURL() != null) {
            const config = {
                postUrl: getApiURL()
            };
            return <div>
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                <Row>
                    <Col md={4} mdOffset={4}> <Button type='submit' bsStyle='primary' style={{width: '100%'} } onClick={submitHandler}> <Glyphicon glyph='upload'/> {buttonText} </Button> </Col>
                </Row>
            </div>
        } else {
            return <div> loading </div>
        }
    }

}

Files.propTypes = {
    buttonText: PropTypes.string.isRequired,
    fileUploadStart: PropTypes.func.isRequired,
    getApiURL: PropTypes.func.isRequired,
    fileUploadSuccess: PropTypes.func.isRequired,
    fileUploadError: PropTypes.func.isRequired,
};


export default Files;






