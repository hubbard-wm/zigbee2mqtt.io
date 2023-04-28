"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81497],{29538:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-34ae68d5","path":"/devices/4523430.html","title":"ELKO 4523430 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ELKO 4523430 control via MQTT","description":"Integrate your ELKO 4523430 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Display_text (text)","slug":"display-text-text","link":"#display-text-text","children":[]},{"level":3,"title":"Load (numeric)","slug":"load-numeric","link":"#load-numeric","children":[]},{"level":3,"title":"Regulator_mode (binary)","slug":"regulator-mode-binary","link":"#regulator-mode-binary","children":[]},{"level":3,"title":"Regulator_time (numeric)","slug":"regulator-time-numeric","link":"#regulator-time-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Floor_temp (numeric)","slug":"floor-temp-numeric","link":"#floor-temp-numeric","children":[]},{"level":3,"title":"Max_floor_temp (numeric)","slug":"max-floor-temp-numeric","link":"#max-floor-temp-numeric","children":[]},{"level":3,"title":"Mean_power (numeric)","slug":"mean-power-numeric","link":"#mean-power-numeric","children":[]},{"level":3,"title":"Child_lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Frost_guard (binary)","slug":"frost-guard-binary","link":"#frost-guard-binary","children":[]},{"level":3,"title":"Night_switching (binary)","slug":"night-switching-binary","link":"#night-switching-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1682706750000},"filePathRelative":"devices/4523430.md"}')},860291:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(166252);const a=(0,i._)("h1",{id:"elko-4523430",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#elko-4523430","aria-hidden":"true"},"#"),(0,i.Uk)(" ELKO 4523430")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"4523430")],-1),l=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"ESH Plus Super TR RF PH")],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"display_text, load, regulator_mode, regulator_time, climate (occupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), sensor, floor_temp, max_floor_temp, mean_power, child_lock, frost_guard, night_switching, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4523430.jpg",alt:"ELKO 4523430"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("ul",null,[(0,i._)("li",null,'Press "arrow up" and "M" simultaneously until "joining" and "pairing" is shown on the ELKO Super TR RF display.')],-1),m=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),g=(0,i.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="display-text-text" tabindex="-1"><a class="header-anchor" href="#display-text-text" aria-hidden="true">#</a> Display_text (text)</h3><p>Displayed text on thermostat display (zone). Max 14 characters. Value can be found in the published state on the <code>display_text</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_text&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_text&quot;: NEW_VALUE}</code>.</p><h3 id="load-numeric" tabindex="-1"><a class="header-anchor" href="#load-numeric" aria-hidden="true">#</a> Load (numeric)</h3><p>Load in W when heating is on (between 0-2000 W). The thermostat uses the value as input to the mean_power calculation.. Value can be found in the published state on the <code>load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>W</code>.</p><h3 id="regulator-mode-binary" tabindex="-1"><a class="header-anchor" href="#regulator-mode-binary" aria-hidden="true">#</a> Regulator_mode (binary)</h3><p>Device in regulator or thermostat mode.. Value can be found in the published state on the <code>regulator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_mode&quot;: NEW_VALUE}</code>. If value equals <code>regulator</code> regulator_mode is ON, if <code>thermostat</code> OFF.</p><h3 id="regulator-time-numeric" tabindex="-1"><a class="header-anchor" href="#regulator-time-numeric" aria-hidden="true">#</a> Regulator_time (numeric)</h3><p>When device is in regulator mode this controls the time between each in/out connection. When device is in thermostat mode this controls the time between each in/out switch when measured temperature is within +-0.5 °C set temperature. Choose a long time for (slow) concrete floors and a short time for (quick) wooden floors.. Value can be found in the published state on the <code>regulator_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_time&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>20</code>. The unit of this value is <code>min</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>50</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>air</code>, <code>floor</code>, <code>supervisor_floor</code>.</p><h3 id="floor-temp-numeric" tabindex="-1"><a class="header-anchor" href="#floor-temp-numeric" aria-hidden="true">#</a> Floor_temp (numeric)</h3><p>Current temperature measured from the floor sensor. Value can be found in the published state on the <code>floor_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_temp&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="max-floor-temp-numeric" tabindex="-1"><a class="header-anchor" href="#max-floor-temp-numeric" aria-hidden="true">#</a> Max_floor_temp (numeric)</h3><p>Set max floor temperature (between 20-35 °C) when &quot;supervisor_floor&quot; is set. Value can be found in the published state on the <code>max_floor_temp</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_floor_temp&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_floor_temp&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="mean-power-numeric" tabindex="-1"><a class="header-anchor" href="#mean-power-numeric" aria-hidden="true">#</a> Mean_power (numeric)</h3><p>Reports average power usage last 10 minutes. Value can be found in the published state on the <code>mean_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mean_power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child_lock (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>lock</code> child_lock is ON, if <code>unlock</code> OFF.</p><h3 id="frost-guard-binary" tabindex="-1"><a class="header-anchor" href="#frost-guard-binary" aria-hidden="true">#</a> Frost_guard (binary)</h3><p>When frost guard is ON, it is activated when the thermostat is switched OFF with the ON/OFF button.At the same time, the display will fade and the text &quot;Frostsikring x °C&quot; appears in the display and remains until the thermostat is switched on again.. Value can be found in the published state on the <code>frost_guard</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;frost_guard&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_guard&quot;: NEW_VALUE}</code>. If value equals <code>on</code> frost_guard is ON, if <code>off</code> OFF.</p><h3 id="night-switching-binary" tabindex="-1"><a class="header-anchor" href="#night-switching-binary" aria-hidden="true">#</a> Night_switching (binary)</h3><p>Turn on or off night setting.. Value can be found in the published state on the <code>night_switching</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_switching&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_switching&quot;: NEW_VALUE}</code>. If value equals <code>on</code> night_switching is ON, if <code>off</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),_={},b=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=ELKO"},{default:(0,i.w5)((()=>[(0,i.Uk)("ELKO")])),_:1})])]),r,n,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);