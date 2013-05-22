////////////////////////////////////////////////////////////////////////////
//    Copyright Webtrobat Team 2013
//    This file is part of Webtrobat.
//
//    Webtrobat is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    Webtrobat is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with Webtrobat.  If not, see <http://www.gnu.org/licenses/>.
//////////////////////////////////////////////////////////////////////////

function LookNode()
{
	this.displayName = new NameNode();
	this.fileName = new FileNameNode();
}

LookNode.prototype = new BaseNode("look");

LookNode.prototype.getDisplayName = function()
{
	return this.displayName.value;
}

LookNode.prototype.getFileName = function()
{
	return this.fileName.value;
}

LookNode.prototype.load = function(dom_element)
{
	this.displayName.load(dom_element.getChildElement(this.displayName.name));
	this.fileName.load(dom_element.getChildElement(this.fileName.name));
}