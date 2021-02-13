import React from 'react';

export function NormalFunctionThatDoesNotExhibitIssue() {
  if(true) {
    for(let i=0;i<100;i++) {
      console.log('doing some work...', i)
    }
  }

  
}

export default function ComponentThatExhibitsIssue() {
  return <div>
    <div className="some-nested-data">
      hello from my nested component
    </div>

    
  </div>
}