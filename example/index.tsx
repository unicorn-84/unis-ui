import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading, Text, Paragraph } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Heading level="h1" variant="title">
        ECMAScript® 2020 Language Specification
      </Heading>
      <Heading level="h2" variant="h2">
        Introduction
      </Heading>
      <Paragraph>
        This Ecma Standard defines the ECMAScript 2020 Language. It is the
        eleventh edition of the ECMAScript Language Specification. Since
        publication of the first edition in 1997, ECMAScript has grown to be one
        of the world's most widely used general-purpose programming languages.
        It is best known as the language embedded in web browsers but has also
        been widely adopted for server and embedded applications.
      </Paragraph>
      <Paragraph>
        ECMAScript is based on several originating technologies, the most
        well-known being JavaScript (Netscape) and JScript (Microsoft). The
        language was invented by Brendan Eich at Netscape and first appeared in
        that company's Navigator 2.0 browser. It has appeared in all subsequent
        browsers from Netscape and in all browsers from Microsoft starting with
        Internet Explorer 3.0.
      </Paragraph>
      <Paragraph>
        The development of the ECMAScript Language Specification started in
        November 1996. The first edition of this Ecma Standard was adopted by
        the Ecma General Assembly of June 1997.
      </Paragraph>
      <Paragraph>
        That Ecma Standard was submitted to ISO/IEC JTC 1 for adoption under the
        fast-track procedure, and approved as international standard ISO/IEC
        16262, in April 1998. The Ecma General Assembly of June 1998 approved
        the second edition of ECMA-262 to keep it fully aligned with ISO/IEC
        16262. Changes between the first and the second edition are editorial in
        nature.
      </Paragraph>
      <Paragraph>
        The third edition of the Standard introduced powerful regular
        expressions, better string handling, new control statements, try/catch
        exception handling, tighter definition of errors, formatting for numeric
        output and minor changes in anticipation of future language growth. The
        third edition of the ECMAScript standard was adopted by the Ecma General
        Assembly of December 1999 and published as ISO/IEC 16262:2002 in June
        2002.
      </Paragraph>
      <Paragraph>
        After publication of the third edition, ECMAScript achieved massive
        adoption in conjunction with the World Wide Web where it has become the
        programming language that is supported by essentially all web browsers.
        Significant work was done to develop a fourth edition of ECMAScript.
        However, that work was not completed and not published as the fourth
        edition of ECMAScript but some of it was incorporated into the
        development of the sixth edition.
      </Paragraph>
      <Paragraph>
        The fifth edition of ECMAScript (published as ECMA-262 5th edition)
        codified de facto interpretations of the language specification that
        have become common among browser implementations and added support for
        new features that had emerged since the publication of the third
        edition. Such features include accessor properties, reflective creation
        and inspection of objects, program control of property attributes,
        additional array manipulation functions, support for the JSON object
        encoding format, and a strict mode that provides enhanced error checking
        and program security. The fifth edition was adopted by the Ecma General
        Assembly of December 2009.
      </Paragraph>
      <Paragraph>
        The fifth edition was submitted to ISO/IEC JTC 1 for adoption under the
        fast-track procedure, and approved as international standard ISO/IEC
        16262:2011. Edition 5.1 of the ECMAScript Standard incorporated minor
        corrections and is the same text as ISO/IEC 16262:2011. The 5.1 Edition
        was adopted by the Ecma General Assembly of June 2011.
      </Paragraph>
      <Paragraph>
        Focused development of the sixth edition started in 2009, as the fifth
        edition was being prepared for publication. However, this was preceded
        by significant experimentation and language enhancement design efforts
        dating to the publication of the third edition in 1999. In a very real
        sense, the completion of the sixth edition is the culmination of a
        fifteen year effort. The goals for this edition included providing
        better support for large applications, library creation, and for use of
        ECMAScript as a compilation target for other languages. Some of its
        major enhancements included modules, class declarations, lexical block
        scoping, iterators and generators, promises for asynchronous
        programming, destructuring patterns, and proper tail calls. The
        ECMAScript library of built-ins was expanded to support additional data
        abstractions including maps, sets, and arrays of binary numeric values
        as well as additional support for Unicode supplemental characters in
        strings and regular expressions. The built-ins were also made extensible
        via subclassing. The sixth edition provides the foundation for regular,
        incremental language and library enhancements. The sixth edition was
        adopted by the General Assembly of June 2015.
      </Paragraph>
      <Paragraph>
        ECMAScript 2016 was the first ECMAScript edition released under Ecma
        TC39's new yearly release cadence and open development process. A
        plain-text source document was built from the ECMAScript 2015 source
        document to serve as the base for further development entirely on
        GitHub. Over the year of this standard's development, hundreds of pull
        requests and issues were filed representing thousands of bug fixes,
        editorial fixes and other improvements. Additionally, numerous software
        tools were developed to aid in this effort including Ecmarkup,
        Ecmarkdown, and Grammarkdown. ES2016 also included support for a new
        exponentiation operator and adds a new method to{' '}
        <Text variant="strong">Array.prototype</Text> called
        <Text variant="strong"> includes</Text>.
      </Paragraph>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
