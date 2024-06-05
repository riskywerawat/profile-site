import React from "react";
import Pubraw from "./customization/Publication.json";
import "./styles/main.css";


export function Pub() {
    const journal = [];
    Pubraw.journal.map((paper) => {
        journal.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
             
            </span></li>
        );
    });
    const conference = [];
    const conference2 = [];
    const conference3 = [];
    const conference4 = [];
    const conference5 = [];
    Pubraw.conference.map((paper) => {
        conference.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                
            </span></li>
        );
    });
    Pubraw.conference2.map((paper) => {
        conference2.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                
            </span></li>
        );
    });
    Pubraw.conference3.map((paper) => {
        conference3.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                
            </span></li>
        );
    });
    Pubraw.conference4.map((paper) => {
        conference4.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                
            </span></li>
        );
    });
    Pubraw.conference5.map((paper) => {
        conference5.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                
            </span></li>
        );
    });
    return (
        
        <div class="pub-list">
			<p>Programming</p>
			<ul>
				{journal}
			</ul>
			<p>Cloud Service</p>
			<ul>
				{conference}
			</ul>
            <p>Database</p>
			<ul>
				{conference2}
			</ul>
            <p>Key management service</p>
			<ul>
				{conference3}
			</ul>
            <p>DevOps</p>
			<ul>
				{conference4}
			</ul>
            <p>Vulnerabilities and Observability tools</p>
			<ul>
				{conference5}
			</ul>

		</div>
    );
}

export default Pub;