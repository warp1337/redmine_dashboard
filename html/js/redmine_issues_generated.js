// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var RedmineIssues = RedmineIssues || {};

/**
 * @constructor
 */
RedmineIssues.Issue = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {RedmineIssues.Issue}
 */
RedmineIssues.Issue.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {RedmineIssues.Issue=} obj
 * @returns {RedmineIssues.Issue}
 */
RedmineIssues.Issue.getRootAsIssue = function(bb, obj) {
  return (obj || new RedmineIssues.Issue).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
RedmineIssues.Issue.prototype.title = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
RedmineIssues.Issue.prototype.asignee = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
RedmineIssues.Issue.prototype.percentDone = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
RedmineIssues.Issue.startIssue = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} titleOffset
 */
RedmineIssues.Issue.addTitle = function(builder, titleOffset) {
  builder.addFieldOffset(0, titleOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} asigneeOffset
 */
RedmineIssues.Issue.addAsignee = function(builder, asigneeOffset) {
  builder.addFieldOffset(1, asigneeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} percentDone
 */
RedmineIssues.Issue.addPercentDone = function(builder, percentDone) {
  builder.addFieldInt16(2, percentDone, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
RedmineIssues.Issue.endIssue = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
RedmineIssues.Issues = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {RedmineIssues.Issues}
 */
RedmineIssues.Issues.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {RedmineIssues.Issues=} obj
 * @returns {RedmineIssues.Issues}
 */
RedmineIssues.Issues.getRootAsIssues = function(bb, obj) {
  return (obj || new RedmineIssues.Issues).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {RedmineIssues.Issue=} obj
 * @returns {RedmineIssues.Issue}
 */
RedmineIssues.Issues.prototype.issues = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new RedmineIssues.Issue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
RedmineIssues.Issues.prototype.issuesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
RedmineIssues.Issues.startIssues = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} issuesOffset
 */
RedmineIssues.Issues.addIssues = function(builder, issuesOffset) {
  builder.addFieldOffset(0, issuesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
RedmineIssues.Issues.createIssuesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
RedmineIssues.Issues.startIssuesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
RedmineIssues.Issues.endIssues = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
RedmineIssues.Issues.finishIssuesBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.RedmineIssues = RedmineIssues;