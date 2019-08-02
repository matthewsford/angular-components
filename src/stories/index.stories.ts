/* Copyright 2019 Matthew Ford <matthew@matthewford.us>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs/angular';
import {linkTo} from '@storybook/addon-links';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Welcome, Button} from '@storybook/angular/demo';

import {EditorButtonsComponent} from '../../projects/angular-components/src/lib/editor-buttons/editor-buttons.component';


export const actions = {
  onClose: action('onClose'),
  onDiscard: action('onDiscard'),
  onSave: action('onSave'),
};

storiesOf('Editor Buttons', module)
  .addDecorator(
    moduleMetadata({
      declarations: [EditorButtonsComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
      ],
    }),
  )
  .add('unmodified', () => {
    return {
      template: `<msf-editor-buttons
                   [modified]="modified"
                   [valid]="valid"
                   (close)="onClose($event)"
                   (discard)="onDiscard($event)"
                    (save)="onSave($event)">
                 </msf-editor-buttons>`,
      props: {
        modified: false,
        valid: true,
        onClose: actions.onClose,
        onDiscard: actions.onDiscard,
        onSave: actions.onSave,
      },
    };
  })
  .add('modified and valid', () => {
    return {
      template: `<msf-editor-buttons
                   [modified]="modified"
                   [valid]="valid"
                   (close)="onClose($event)"
                   (discard)="onDiscard($event)"
                    (save)="onSave($event)">
                 </msf-editor-buttons>`,
      props: {
        modified: true,
        valid: true,
        onClose: actions.onClose,
        onDiscard: actions.onDiscard,
        onSave: actions.onSave,
      },
    };
  })
  .add('modified and invalid', () => {
    return {
      template: `<msf-editor-buttons
                   [modified]="modified"
                   [valid]="valid"
                   (close)="onClose($event)"
                   (discard)="onDiscard($event)"
                    (save)="onSave($event)">
                 </msf-editor-buttons>`,
      props: {
        modified: true,
        valid: false,
        onClose: actions.onClose,
        onDiscard: actions.onDiscard,
        onSave: actions.onSave,
      },
    };
  });

/*
storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    {notes: 'My notes on a button with emojis'}
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    {notes: 'My notes on a button with emojis'}
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
*/
