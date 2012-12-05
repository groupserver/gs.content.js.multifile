Introduction
============

The product supplies the `jQuery Multiple File Upload Plugin`_ for
GroupServer_. `The plugin`_ allows people to chose to upload multiple
files; while predominately used by ``gs.group.messages.topic`` [#topic]_ it
is not tied to that.

It is possible to allow people to upload multiple files by setting
``multiple="multiple"`` attribute in the ``<input>`` element. However, the
affordance of the multiple-file selector interfaces is low, compared to the
plugin supplied by this product.

The Plugin
==========

The plugin comes in two parts. The first is the generic plugin
``jquery.MultiFile.js``, which is supplied by the *resource directory*
``multiple_file_upload-1.48``. The second component is the GroupServer
customisations, which is supplied by the *resource*
``gsfileupload-20121206.js``. The JavaScript that is added to a page, to
load these components, is as follows::

  <script type="text/javascript"
    src="/++resource++multiple_file_upload-1.48/jquery.MultiFile.js">&#160;</script>
  <script type="text/javascript"
    src="/++resource++gsfileupload-20121206.js">&#160;</script>
  <script type="text/javascript">
    jQuery.noConflict();
    jQuery(document).ready( function () {
        GSFileUpload.init();
    });
  </script>

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.multifile
- Questions and comments to http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/groupserver

.. _GroupServer: http://groupserver.org/
.. _jQuery Multiple File Upload Plugin: http://www.fyneworks.com/jquery/multiple-file-upload

..  LocalWords:  plugin
