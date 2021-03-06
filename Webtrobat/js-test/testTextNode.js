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

TextNodeTest = TestCase("TextNode");

TextNodeTest.prototype.testTextNode = function()
{
    var attr = new TextNode("my_xml_name");
    assertEquals("my_xml_name", attr.name);
    assertEquals("", attr.getText());

    attr.value = "Hello";
    assertEquals("Hello", attr.getText())
}

TextNodeTest.prototype.testLoad = function()
{
    var xml_string = "<xml_name>Hello</xml_name>";

    var attr = new TextNode("xml_name");
    attr.load(Utils.getRootElement(xml_string));

    assertEquals("Hello", attr.getText());
}