SET statement_timeout = 0;

SET lock_timeout = 0;

SET idle_in_transaction_session_timeout = 0;

SET client_encoding = 'UTF8';

SET standard_conforming_strings = on;

SELECT pg_catalog.set_config ('search_path', '', false);

SET check_function_bodies = false;

SET xmloption = content;

SET client_min_messages = warning;

SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 17029)
-- Name: branchsemsubject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branchsemsubject (
    id integer NOT NULL, branch text NOT NULL, sem integer NOT NULL, subjectcodes jsonb NOT NULL
);

ALTER TABLE public.branchsemsubject OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 17028)
-- Name: branchsemsubject_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.branchsemsubject_id_seq AS integer START
WITH
    1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.branchsemsubject_id_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 218
-- Name: branchsemsubject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.branchsemsubject_id_seq OWNED BY public.branchsemsubject.id;

--
-- TOC entry 3209 (class 2604 OID 17032)
-- Name: branchsemsubject id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branchsemsubject ALTER COLUMN id SET DEFAULT nextval('public.branchsemsubject_id_seq'::regclass);

--
-- TOC entry 3356 (class 0 OID 17029)
-- Dependencies: 219
-- Data for Name: branchsemsubject; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO
    public.branchsemsubject
VALUES (
        2, 'cse', 4, '{"ES": "22AECCE11", "DAA": "22CSE249", "DCN": "22CSE107", "TOC": "22CSE330"}'
    );

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 218
-- Name: branchsemsubject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval ( 'public.branchsemsubject_id_seq', 2, true );

--
-- TOC entry 3211 (class 2606 OID 17036)
-- Name: branchsemsubject branchsemsubject_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branchsemsubject
ADD CONSTRAINT branchsemsubject_pkey PRIMARY KEY (id);

-- Completed on 2024-03-07 19:28:16 UTC

--
-- PostgreSQL database dump complete
--