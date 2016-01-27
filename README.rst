===========================
``gs.content.js.multifile``
===========================
~~~~~~~~~~~~~~~~~~~~~~~~~~~
The Multifile jQuery plugin
~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2016-01-27
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 4.0 International License`_
  by `OnlineGroups.net`_.

..  _Creative Commons Attribution-Share Alike 4.0 International License:
    http://creativecommons.org/licenses/by-sa/4.0/

Introduction
============

The product supplies the `jQuery Multiple File Upload Plugin`_
for GroupServer_. `The plugin`_ allows people to chose to upload
multiple files; while predominately used by
``gs.group.messages.topic.base`` [#topic]_ it is not tied to
that.

It is possible to allow people to upload multiple files by
setting ``multiple="multiple"`` attribute in the ``<input>``
element. However, the affordance of the multiple-file selector
interfaces is low, compared to the plugin supplied by this
product.

The Plugin
==========

The plugin is provided by ``jquery.MultiFile.js`` (or
``jquery.MultiFile-min.js``), which is supplied by the *resource
directory* ``multiple_file_upload-2.2.1``::

  <script type="text/javascript"
    src="/++resource++multiple_file_upload-2.2.1/jquery.MultiFile.js"
    defer="defer"> </script>

Resources
=========

- Code repository:
  https://github.com/groupserver/gs.content.js.multifile
- Questions and comments to
  http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/groupserver

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. [#topic] See
            <https://source.iopen.net/groupserver/gs.group.messages.topic.bae>
.. _jQuery Multiple File Upload Plugin:
   http://www.fyneworks.com/jquery/multiple-file-upload

..  LocalWords:  plugin
