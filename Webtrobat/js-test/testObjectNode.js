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

ObjectNodeTest = TestCase("ObjectNodeTest");

ObjectNodeTest.prototype.testObjectNode = function()
{
    var objectNode = new ObjectNode();
    assertEquals("object", objectNode.name);
    assertEquals("", objectNode.getDisplayName());
    assertEquals(0, objectNode.getNumberOfLooks());
    assertEquals(0, objectNode.getNumberOfScripts());
    assertEquals(0, objectNode.getNumberOfSounds());
}

ObjectNodeTest.prototype.testLoad = function()
{
    var xml_string =
"    <object>\
      <lookList>\
        <look>\
          <fileName>file1</fileName>\
          <name>look1</name>\
        </look>\
      </lookList>\
      <name>Object1</name>\
      <scriptList>\
        <startScript/>\
        <whenScript/>\
      </scriptList>\
      <soundList>\
        <sound/>\
        <sound/>\
        <sound/>\
      </soundList>\
     </object>";

    var objectNode = new ObjectNode();
    objectNode.load(Utils.getRootElement(xml_string));

    assertEquals("Object1", objectNode.getDisplayName());
    assertEquals(1, objectNode.getNumberOfLooks());
    assertEquals(2, objectNode.getNumberOfScripts());
    assertEquals(3, objectNode.getNumberOfSounds());
}
