
import React from 'react';
const Progress = props => props.isProgress ? <span className="progress"><i className="fas fa-compact-disc fa-spin"/></span> : null;
export {Progress}